; -------------------------------------
; Print the arguments to the console  -
; -------------------------------------

%include 'functions.asm'                    ; usefull functions 

global _start 

SECTION .text 

_start: 
            pop rcx
loop_p:
            cmp rcx, 0
            je no_more_arg
            pop rdi
            push rcx                ; save the register 
            call printl
            pop rcx 
            dec rcx
            jmp loop_p
no_more_arg:
            call quit         




