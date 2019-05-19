; -----------------------------------------------------
; this program implements the main function and prints-
; the cmd line args to the console                    -
; --> rdi will contain argc                           -
; --> rsi will contain the pointer to the argumentst  -
; -----------------------------------------------------

global main
extern puts 

section .text

main: 
push rdi 
push rsi   ; save the registers 
sub rsp, 8 ; align stack poiter 

mov rdi, [rsi] ; pass the first thing to print 
call puts 

add rsp, 8 ; revert the stack pointer 
pop rsi
pop rdi    ; restore the registers 

add rsi, 8 ; move rsi to the next string to print 
dec rdi    ; decrement the number of params 
jnz main   ; if not done do it again 

ret 
