global _start 

section .text 

_start:
mov rax, 1
mov rdi, 1
mov rsi, message 
mov rdx, 6 
syscall

mov rax, 60
syscall

section .data
message: db "Hello", 10

