; ----------------------------------------------------------------
; this is a function that takes 3 params and returns the maximum -
; params in: rdi, rsi, rdx                                       -
; ----------------------------------------------------------------


global max_of_three

section .text

max_of_three:
mov rax, rdi
cmp rax, rsi 
cmovl rax, rsi
cmp rax, rdx 
cmovl rax, rdx
ret
