// WARNING! The program requires libraries listed below to run properly.
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int height = get_int("Height:\n");

    if (height >= 1 && height <= 8)
    {
        int rowLength = ((height + 1) * 2);

        for (int i = height; i > 0; i--)
        {

            for (int j = 0; j < rowLength; j++)
            {

                if ((j >= (i - 1) && j < height) ||
                    (j <= (rowLength - i) && j > (height + 1)))
                {
                    printf("#");
                }
                else
                {
                    printf(" ");
                }
            }

            printf("\n");
        }
    }
    else
    {
        height = get_int("Height:\n");
    }
}

// How to run: enter 'make mario' in the terminal, then execute by './mario'