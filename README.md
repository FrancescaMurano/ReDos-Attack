# ReDos
Simulation of Node.js server vulnerable to ReDos attack.

## Server
Node.js server with ReDos vulnerability in login and registration function due to evil pattern in regex.

 ## Attacker
 *exploitReDos.py*, a script with two attack mode:
- **Type 1**: Using a crafted input after discovering an evil regex server-side.
- **Type 2**: Injecting an evil pattern into a regex.
 
The script used by the attacker enables customization of the attack through the following fields:
- **--type-attack** = an INTEGER to specify the type of attack.
- **--server** = a TEXT to specify the target server for the attack;
- **--timeout-in-seconds** = an INTEGER to specify how many seconds to wait before considering the server unavailable;
- **--max-input-size** = an INTEGER representing the maximum size of the crafted input to insert.
- **--evil-regex** = a TEXT representing a malicious regex.
- **--base-input** = a TEXT representing the base input required for concatenation with bad input to exploit the regex.
- **--bad-input** = a TEXT representing the bad input that triggers backtracking.

![immagine](https://github.com/FrancescaMurano/ReDos/assets/72566115/33352f9e-521d-48a0-9493-4ef24d6bf4c4)

## Example 

![immagine](https://github.com/FrancescaMurano/ReDos/assets/72566115/c0a7e731-f90b-4ed1-8243-f2610ae2d5a6)
