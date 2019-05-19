;
;   prints string using functions from functions.asm
;

%include 'functions.asm'

global _start 

section .text 

_start: 
        mov rdi, mess1 
        call printl

        mov rdi, mess2
        call printl

        call quit 


section .data 

mess1:      db "first message", 10, 0
mess2:      db "second message", 10, 0