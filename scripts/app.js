/* Variables */

    /* Ciblage */

        const travail = document.querySelector('.temps-travail');
        const repos = document.querySelector('.temps-repos');
        const cycle = document.querySelector('.cycle');
        const btnCommencer = document.querySelector('.commencer');
        const btnPausePlay = document.querySelector('.pause-play');
        const btnReset = document.querySelector('.reset');

    /* Temps & cycles */

        let tempsTravail = 1800;
        let tempsRepos = 300;
        let cycleT = 0; 
        let checkInterval = false;
        let pause = false;

/* Affichages de départ */

    travail.innerHTML = `${Math.trunc(tempsTravail/60)} : ${(tempsTravail % 60 < 10) ? "0" + tempsTravail % 60 : tempsTravail % 60}`;
    repos.innerHTML = `${Math.trunc(tempsRepos/60)} : ${(tempsRepos % 60 < 10) ? "0" + tempsRepos % 60 : tempsRepos % 60}`;
    cycle.innerText = cycleT;

/* Événements */

    btnCommencer.addEventListener('click', comptesARebours);
    btnPausePlay.addEventListener('click', pauseCycle);
    
    
/* Fonctions */

    /* Comptes à rebours */

        function comptesARebours()
        {
            if(checkInterval === false)
            {
                let timer = setInterval(() =>
                {

                    if(pause === false && tempsTravail > 0)
                    {
                        tempsTravail--;
                        travail.innerHTML = `${Math.trunc(tempsTravail/60)} : ${(tempsTravail % 60 < 10) ? "0" + tempsTravail % 60 : tempsTravail % 60}`;
                    }
                    else if(pause === false && tempsTravail === 0 && tempsRepos === 0)
                    {
                        tempsTravail = 1800;
                        travail.innerHTML = `${Math.trunc(tempsTravail/60)} : ${(tempsTravail % 60 < 10) ? "0" + tempsTravail % 60 : tempsTravail % 60}`;

                        tempsRepos = 300;
                        repos.innerHTML = `${Math.trunc(tempsRepos/60)} : ${(tempsRepos % 60 < 10) ? "0" + tempsRepos % 60 : tempsRepos % 60}`;

                        cycleT++;
                        cycle.innerText = cycleT;
                    }
                    else if(pause === false && tempsTravail === 0)
                    {
                        tempsRepos--;
                        repos.innerHTML = `${Math.trunc(tempsRepos/60)} : ${(tempsRepos % 60 < 10) ? "0" + tempsRepos % 60 : tempsRepos % 60}`;
                    }

                }, 1000);
                
                /* Reset du compte à rebours */
                
                    btnReset.addEventListener('click', () =>
                    {
                        clearInterval(timer);

                        checkInterval = false;

                        tempsTravail = 1800;
                        travail.innerHTML = `${Math.trunc(tempsTravail/60)} : ${(tempsTravail % 60 < 10) ? "0" + tempsTravail % 60 : tempsTravail % 60}`;

                        tempsRepos = 300;
                        repos.innerHTML = `${Math.trunc(tempsRepos/60)} : ${(tempsRepos % 60 < 10) ? "0" + tempsRepos % 60 : tempsRepos % 60}`;

                        cycle.innerText = 0;
                    });
            }
            else
            {
                return;
            }
        }

    /* Mettre en pause ou relancer le compte à rebours */
    
        function pauseCycle()
        {
            if(pause === false)
            {
                btnPausePlay.innerText = 'Play';
            }
            else
            {
                btnPausePlay.innerText = 'Pause';
            }

            pause = !pause;
        }