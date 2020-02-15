/*
Toward the beginning of World 1-1 in Nintendo’s Super Mario Brothers, Mario must hop over adjacent pyramids of blocks.

Let’s recreate those pyramids in C, albeit in text, using hashes (#) for bricks, a la the below. Each hash is a bit taller than it is wide, so the pyramids themselves are also be taller than they are wide.

   #  #
  ##  ##
 ###  ###
####  ####
The program we’ll write will be called mario. And let’s allow the user to decide just how tall the pyramids should be by first prompting them for a positive integer between, say, 1 and 8, inclusive.

Here’s how the program might work if the user inputs 8 when prompted:

$ ./mario
Height: 8
       #  #
      ##  ##
     ###  ###
    ####  ####
   #####  #####
  ######  ######
 #######  #######
########  ########

Notice that width of the “gap” between adjacent pyramids is equal to the width of two hashes, irrespective of the pyramids’ heights.
*/

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