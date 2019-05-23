#include <iostream>
#include <typeinfo>

int main()
{
    std::cout << typeid(50).name() << std::endl; // typeid.name == i -- int 
    std::cout << typeid(2147483650).name() << std::endl; // typeid.name == l -- long == long long 8 bytes 

    std::cout << typeid(017).name() << std::endl; // int 
    std::cout << typeid(037777777777).name() << std::endl; // unsigned int 
    std::cout << typeid(0377777777777).name() << std::endl; // long 
    std::cout << typeid(01777777777777777777777).name() << std::endl; // unsigned long

    /* Rule: 
     * decimal literals are converted to int, long, long long 
     * octal and hexadecimal literals are converted to int, unsigned int, long, unsigned long, long long, unsigned long long 
    */

    return 0; 
}