; computes the lenght of the string that is printed, no need to be hardcoded anymore 

global  _start 

section .text 

        _start:
        mov rax, message 
        mov rbx, message                        ; initialization phase 

        char_not_null:                          ; go back here till the char is 0 
        cmp byte [rax], 0                       ; compare the current char with 0 
        je print
        inc rax
        jmp char_not_null       

        print:

        mov rdx, rax 
        sub rdx, rbx

        mov rax, 1                              ; write call 
        mov rdi, 1                              ; stdout 
        mov rsi, message 
        syscall

        mov rax, 60                             ; sys_exit call
        syscall 

section .data
        message: 
        db "Hello, brave new world! Also hello!", 10, 0