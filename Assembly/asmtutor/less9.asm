%include 'functions.asm'

SECTION .data
mess1:  db "Enter your name: ", 0
mess2:  db "Hello, ", 0


SECTION .bss
buff:   resb    200

SECTION .text

global _start 

_start:
mov rdi, mess1
sub rsp, 8
call print 
add rsp, 8

mov rax, 0
mov rdi, 0
mov rsi, buff 
mov rdx, 200
syscall 

mov rdi, mess2
sub rsp, 8
call print 
add rsp, 8

mov rdi, buff 
sub rsp, 8
call print 
add rsp, 8

call quit