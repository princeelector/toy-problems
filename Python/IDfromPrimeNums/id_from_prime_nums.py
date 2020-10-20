def solution(i):
    if not(i >= 0 and i <= 10000): return

    prime_numbers_str = ''
    prime_numbers_list = []
    x = 1

    while len(prime_numbers_str) < 10005:
        x += 1
        not_prime = False

        if len(prime_numbers_list) > 0:
            for y in prime_numbers_list:
                if x % y == 0:
                    not_prime = True
                    break
                else: continue

        if not_prime: continue
        if not x == 2 and x % 2 == 0: continue
        if sum(list(map(int,str(x)))) % 3 == 0 and x != 3: continue

        prime_numbers_str += str(x)
        prime_numbers_list.append(x)

    return prime_numbers_str[i:i+5]
