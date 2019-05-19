; ---------------------------
; factorial using recursion -
; ---------------------------

global factorial

section .text
factorial:
cmp rdi, 1
jne make
mov rax, 1
ret

make:
push rdi
dec rdi
call factorial
pop rdi 
imul rax, rdi 
ret

