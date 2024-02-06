📚 L’algorithme que nous allons utiliser pour vérifier les numéros de carte s’appelle l’algorithme de Luhn, ou formule de Luhn. Cet algorithme est en fait utilisé dans des applications réelles pour tester les numéros de cartes de crédit ou de débit ainsi que les numéros de série des cartes SIM.

🎯 L’objectif de l’algorithme est d’identifier les numéros potentiellement erronés, car il peut déterminer s’il est possible ou non qu’un numéro donné soit celui d’une carte valide.

#### La façon dont nous allons utiliser l’algorithme est la suivante :

- Retire le chiffre le plus à droite du numéro de la carte. Ce chiffre est appelé chiffre de contrôle, et il sera exclu de la plupart de nos calculs. 
- Inverse l’ordre des chiffres restants. Pour cette séquence de chiffres inversés, prends les chiffres de chacun des indices pairs (0, 2, 4, 6, etc.) et double-les. Si l’un des résultats est supérieur à 9, soustrais 9 à ces chiffres. 
- Additionne tous les résultats et ajoute le chiffre de contrôle. Si le résultat est divisible par 10, le nombre est un numéro de carte valide. Si ce n’est pas le cas, le numéro de carte n’est pas valide. 
  
> Examinons cette procédure étape par étape pour un numéro valide afin de voir comment elle fonctionne. Le numéro que nous allons utiliser est le **5893804115457289**, qui est un numéro de carte Maestro valide, mais pas un numéro en cours d’utilisation.

- 5893804115457289 Numéro de départ
- 589380411545728X Enlever le dernier chiffre
- 827545114083985X Inverser les chiffres restants
- 16214585218016318810X Doubler les chiffres aux indices pairs
- 725585218073981X Soustraire 9 s’il est supérieur à 9 
- Maintenant, nous additionnons ces chiffres et ajoutons le chiffre de contrôle :
7 + 2 + 5 + 5 + 8 + 5 + 2 + 1 + 8 + 0 + 7 + 3 + 9 + 8 + 1 + 9 
Si nous effectuons cette série d’additions, nous obtenons 80. 80 est divisible par 10, le numéro de la carte est donc valide.