document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navDots = document.querySelectorAll('.nav-dot');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const sectionId = entry.target.id;
                navDots.forEach(dot => {
                    dot.classList.toggle('active', dot.dataset.section === sectionId);
                });
            }
        });
    }, {
        threshold: 0.5
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    navDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.getElementById(dot.dataset.section);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    const games = [
        {
            title: "Ninja Chop 2D - Shuriken",
            gameplay: ["images/Game_Gameplay.jpg"],
            description: "Ninja Chop 2D - Shuriken is a 2D puzzle game that combines drag-and-drop mechanics with challenging levels. As a ninja chef, your goal is to slice four fruits per level by throwing shurikens. Each level features unique elements such as portals and disappearing obstacles, increasing the difficulty as you progress.",
            features: [
                "Throw shurikens to slice fruits using drag-and-drop mechanics.",
                "Each level has 4 fruits to slice and 3 attempts to do so.",
                "Progress through 25 levels with increasing difficulty and unique mechanics.",
                "Dynamic puzzle elements like portals and disappearing obstacles.",
                "Challenging levels that test your timing and precision.",
                "Colorful and engaging graphics with smooth animations."
            ],
            videoLink: "https://www.youtube.com/playlist?list=PLjRBsjKhG52oKKZxQGPtARgLlnmeByp3u",
            linkText: "Watch Gameplay Video"
        },
        {
            title: "Let's Steal 3D",
            gameplay: ["images/LetsSteal3D_Gameplay.jpg"],
            description: "Let's Steal 3D is a 3D game focused on theft and object stealing. The main character, a child, takes orders from a dangerous goose to steal targeted objects from various locations without getting caught by security guards. Using a joystick, the player moves the character to grab the object and deliver it to the designated spot, avoiding detection. The game features 20 levels that become increasingly difficult.",
            features: [
                "Move the character using a joystick to steal objects.",
                "Avoid security guards and deliver the object to the designated spot.",
                "Progress through 20 levels with increasing difficulty.",
                "3D environments with dynamic challenges.",
                "Stealth mechanics to avoid detection.",
                "Engaging storyline with humorous elements."
            ],
            videoLink: "https://www.youtube.com/playlist?list=PLjRBsjKhG52o77Ck-U1UQzNlEYjBs3t3M",
            linkText: "Watch Gameplay Video"
        },
        {
            title: "Ufo Beam",
            gameplay: ["images/UfoBeam_Gameplay.jpg"],
            description: "Ufo Beam is a 2D endless game where players aim to achieve the highest score. The game involves controlling a UFO using a joystick to abduct humans walking on the ground with the UFO's beam. The abducted humans are pulled into the UFO, earning the player gold. The gold can be used to buy new UFOs when the player loses. The score increases as long as the player survives, and they try to beat their high score while avoiding birds and meteors in the sky. Random power-ups appear at random locations, providing various advantages such as shields and extra gold.",
            features: [
                "Control the UFO with a joystick to abduct humans and earn gold.",
                "Avoid birds and meteors to stay alive and increase your score.",
                "Collect power-ups for various advantages.",
                "Endless gameplay with increasing difficulty.",
                "Highscore system to compete with yourself.",
                "Unlockable UFOs with earned gold."
            ],
            videoLink: "https://linktr.ee/ufobeam",
            linkText: "Play the Game"
        },
        {
            title: "Guardians of the Town",
            gameplay: ["images/GuardiansOfTheTown_Gameplay1.jpg", "images/GuardiansOfTheTown_Gameplay2.jpg"],
            description: "Guardians of the Town is a game designed for children with learning difficulties, featuring three different types of gameplay. Each type of gameplay involves dragging or clicking cards with pictures. One type involves selecting picture cards that start with the same letter, another involves selecting words spoken by a narrator in sequence, and the third type involves selecting cards that match a concept spoken by the narrator, such as selecting a field and a tractor for a village concept. The game rewards players with gold, which can be used to change the main character in the shop. The main character stands on the main screen and can be customized with gold earned in the games. Experience points earned in the games are also displayed on the main screen.",
            features: [
                "Select picture cards that start with the same letter.",
                "Select words spoken by the narrator in sequence.",
                "Select cards that match the spoken concept.",
                "Three different types of educational gameplay.",
                "Customizable main character with gold earned.",
                "Experience points displayed on the main screen."
            ],
            videoLink: "https://www.youtube.com/watch?v=jK9qJysGVVM&list=PLjRBsjKhG52r-8CERcHJBeB_PUNDFWSxI&index=6&t=1s",
            linkText: "Watch Gameplay Video"
        }
    ];

    const container = document.getElementById('portfolio');

    games.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.classList.add('game');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        const gameplayImages = document.createElement('div');
        gameplayImages.classList.add('gameplay-images');

        game.gameplay.forEach((imgSrc, index) => {
            const gameplayImage = document.createElement('img');
            gameplayImage.src = imgSrc;
            gameplayImage.alt = `${game.title} Gameplay ${index + 1}`;
            if (game.title === "Ufo Beam") {
                gameplayImage.classList.add('gameplay-img-small');
            }
            gameplayImages.appendChild(gameplayImage);
        });

        imageContainer.appendChild(gameplayImages);
        gameElement.appendChild(imageContainer);

        const content = document.createElement('div');
        content.classList.add('game-content');

        const title = document.createElement('h2');
        title.textContent = game.title;
        content.appendChild(title);

        const description = document.createElement('p');
        description.innerHTML = `<strong>${game.title}</strong> ${game.description}`;
        content.appendChild(description);

        const gameplayFeaturesTitle = document.createElement('p');
        gameplayFeaturesTitle.innerHTML = '<strong>Gameplay Features:</strong>';
        content.appendChild(gameplayFeaturesTitle);

        const gameplayFeatureList = document.createElement('div');
        gameplayFeatureList.classList.add('features');
        game.features.forEach(feature => {
            const featureItem = document.createElement('div');
            featureItem.classList.add('feature');
            featureItem.textContent = feature;
            gameplayFeatureList.appendChild(featureItem);
        });
        content.appendChild(gameplayFeatureList);

        const videoLink = document.createElement('p');
        videoLink.innerHTML = game.title === "Ufo Beam" ? "Play the game below!" : `Watch the gameplay video below to see ${game.title} in action!`;
        content.appendChild(videoLink);

        const videoAnchor = document.createElement('a');
        videoAnchor.href = game.videoLink;
        videoAnchor.target = '_blank';
        videoAnchor.style.color = '#61dafb';
        videoAnchor.textContent = game.linkText;
        content.appendChild(videoAnchor);

        gameElement.appendChild(content);

        container.appendChild(gameElement);
    });
});
