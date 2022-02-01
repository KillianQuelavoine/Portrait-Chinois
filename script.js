document.addEventListener("DOMContentLoaded", function () { //chargement du DOM

            // REDIRECTION DE LA PAGE D'ENTRÉE VERS LA PAGE DE PRESENTATION 
            // Création des variables 
            var boutonEntrer = document.getElementById('BoutonEntrer');
            var Entrer = document.querySelector('.entrer');
            var scroll = document.querySelector('body')
            // Au clique sur le bouton d'entrée, le display sera à none et la fonctionnalité de scroll sera rajoutée grace à l'ajout de la classe
            boutonEntrer.addEventListener('click', function (e) {
                Entrer.classList.add('mask');
                scroll.classList.remove('no-scroll');
            });

            // SECTION DU PORTRAIT CHINOIS 
            // Chargement du contenu du fichier JSON dans une variable data en utilisant fetch en Javascript.
            fetch('analogie.json').then(function (response) {
                response.json().then(function (data) {

                    function ajouteanal(data) {
                        data.forEach(function (f) {
                            // On créer ici une nouvelle section avec tous les éléments contenus dans notre JSON
                            var ConteneurPortraitChinois = document.createElement("section");
                            ConteneurPortraitChinois.innerHTML =
                                '<h2 class="analogie">' +
                                'Si j’étais <span>' + f.analogie + '</span>, je serais <span>' + f.valeur + '</span></h2>' +
                                '<div class="' + f.classjustification + '">' +
                                '<p class="justification">' + f.justification + '</p>' +
                                '<img src="' + f.image + '" alt=""></img>' +
                                '</div>' +
                                '<div>';
                            document.querySelector("div.portrait-chinois").append(ConteneurPortraitChinois);
                        });


                    }
                    ajouteanal(data)
                })
            })

            // CRÉATION DU VOLET VISIBLE ET INVISIBLE POUR LES MENTIONS LEGALES 
            document.querySelector('.volet-invisible').addEventListener('click', function (click) {
                // Afficher le mot « click » dans la console quand on a cliqué sur l’élément ayant pour classe volet-invisible
                console.log("click")

                // Animation au bout de 800 millisecondes après le clic 
                document.getElementById('volet').animate([{
                    height: '30em'
                }], {
                    duration: 800
                })

                // Attribution de la classe volet-visible en supprimant la classe volet-invisible
                setTimeout(function () {
                    document.querySelector('.volet-invisible').classList.add('volet-visible');
                    document.querySelector('.volet-invisible').classList.remove('volet-invisible');
                }, 800);

            })

            // Pour refermer le volet des mentions légales : 

            document.getElementById('volet').addEventListener('click', function (click) {
                // Afficher le mot « click » dans la console quand on a cliqué sur l’élément ayant pour classe volet-invisible
                console.log("click")

                // Animation au bout de 800 millisecondes après le clic
                document.querySelector('.volet-visible').animate([{
                    height: '3em'
                }], {
                    duration: 800
                })
                // Attribution de la classe volet-invisible en supprimant la classe volet-visible
                setTimeout(function () {
                    document.getElementById('volet').classList.remove('volet-visible');
                    document.getElementById('volet').classList.add('volet-invisible');
                }, 800);

            })


            // ANALOGIE SUGGEREE ET FORMULAIRE

            // Initialisation des variables
            var CliqueBouton = document.querySelector('.cliqueBouton');
            var Formulaire = document.getElementById('formulairejs');
            var BoutonFermer = document.getElementById('fermer')

            // Au clique le formulaire aparait on enlève le display none du mask
            CliqueBouton.addEventListener('click', function (e) {
                Formulaire.classList.remove('mask');
            });

            // Au clique sur la croix qui a pour #fermer le display none est ajouté, on rajoute la class mask
            BoutonFermer.addEventListener('click', function (e) {
                Formulaire.classList.add('mask');
            });

            // Initialisation de la variable du bouton Envoyer du formulaire
            var boutonEnvoyer1 = document.getElementById('boutonEnvoyer')

            
            boutonEnvoyer1.addEventListener('click', function (e) {

                Formulaire.classList.add('mask');
                Formulaire.style.top = "913vh";

                var analogie2 = document.getElementById('analogie1').value
                var valeur2 = document.getElementById('valeur1').value
                var justification2 = document.getElementById('justification1').value
                var image2 = document.getElementById('image1').value


                var creationSection = document.createElement("section");
                creationSection.innerHTML =
                    '<h2 class="analogie">' +
                    'Si j’étais <span>' + analogie2 + '</span>, je serais <span>' + valeur2 + '</span></h2>' +
                    '<div class="imgjustif-even">' +
                    '<p class="justification">' + justification2 + '</p>' +
                    '<img src="' + image2 + '" alt=""></img>' +
                    '</div>' +
                    '<div>';
                document.querySelector("div.portrait-chinois").append(creationSection);
            });

            //API 

            boutonEnvoyer1.addEventListener('click', function (e) {
                
                // Initialisation des variables
                var FormulaireMail = document.querySelector("#mail1").value
                var FormulaireAnalogie = document.querySelector("#analogie1").value
                var FormulaireAaleurAnalogie = document.querySelector("#valeur1").value
                var FormulaireJustification = document.querySelector("#justification1").value
                var ImageSuggerée = document.querySelector("#image1").value
                
                // Lien vers l'API de Philippe Gambette
                var API_URL = 'https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=killian.quelavoine&courriel=philippe.gambette@u-pem.fr&message=' + 'mail:' + FormulaireMail + 'Si jetais :' + FormulaireAnalogie + ' , je serais ' + FormulaireAaleurAnalogie + ' parce que  : ' + FormulaireJustification + 'Votre image : '+ ImageSuggerée;


                console.log(API_URL);

                // Envoyer les données à l'API
                fetch(API_URL).then(function (response) {
                    response.json().then(function (data) {
                        console.log("Réponse reçue : ")
                        console.log(data);
                    })
                })

                console.log(data)
            });
        });