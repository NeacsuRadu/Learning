;--------------------------------------------------
; sample code calling puts                        - 
; nasm -felf64 x.asm && gcc -no-pie x.o && ./a.out-
;--------------------------------------------------

            global main
            extern puts 

            section .text

main:       
            mov         rdi, message 
            call        puts 
            ret 

            section .data
message:    db          "Hello, World!", 0