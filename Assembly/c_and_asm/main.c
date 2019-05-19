#include <stdio.h>

int max_of_three(int x, int y, int z);

int main()
{
    printf("%d\n", max_of_three(1, 5, 2));
    printf("%d\n", max_of_three(-2, -5, 0));
    printf("%d\n", max_of_three(7, 3, 1));
    return 0;
}