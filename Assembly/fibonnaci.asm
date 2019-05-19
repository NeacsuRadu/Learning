;--------------------------------------------------
; printing first 50 fibbonaci number using printf -
;--------------------------------------------------

global main
extern printf 

section .text 
main: 

push r12
push r13 
push r14                    ; save these registers 

mov r12, 50                 ; keep in r12 the number of numbers remaining 
mov r13, 0                  ; last number, initially we put it 0 and ignore the value 
mov r14, 1                  ; current number to print 


print:                      ; this is the part where we call printf 

mov rdi, format             ; first parameter for the printf function 
mov rsi, r14                ; second parameter for the printf function 
call printf                 ; call the function 

mov r15, r13 
mov r13, r14 
add r14, r15 

dec r12 
jnz print 

end:                        ; this is the end of the main function 
pop r14
pop r13
pop r12                     ; restore these registers
ret 

section .data 
format: db "%ld", 10, 0
