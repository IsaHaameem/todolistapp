const questions = [
    // 1 - 10
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "F. Scott Fitzgerald", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Indian Ocean", correct: false },
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol O?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Osmium", correct: false },
            { text: "Oxium", correct: false },
            { text: "Opium", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false },
            { text: "Raphael", correct: false },
            { text: "Donatello", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Diamond", correct: true },
            { text: "Iron", correct: false },
            { text: "Titanium", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Tokyo", correct: true },
            { text: "Kyoto", correct: false },
            { text: "Osaka", correct: false },
            { text: "Hiroshima", correct: false }
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Alexander Fleming", correct: true },
            { text: "Marie Curie", correct: false },
            { text: "Albert Einstein", correct: false },
            { text: "Isaac Newton", correct: false }
        ]
    },

    // 11 - 20
    {
        question: "Which country won the 2018 FIFA World Cup?",
        answers: [
            { text: "Germany", correct: false },
            { text: "Brazil", correct: false },
            { text: "France", correct: true },
            { text: "Argentina", correct: false }
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            { text: "Amazon", correct: false },
            { text: "Nile", correct: true },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false }
        ]
    },
    {
        question: "Which planet is the largest in our solar system?",
        answers: [
            { text: "Saturn", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Uranus", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "Who is the Greek god of war?",
        answers: [
            { text: "Ares", correct: true },
            { text: "Zeus", correct: false },
            { text: "Apollo", correct: false },
            { text: "Hades", correct: false }
        ]
    },
    {
        question: "What is the smallest country in the world?",
        answers: [
            { text: "Monaco", correct: false },
            { text: "Vatican City", correct: true },
            { text: "Malta", correct: false },
            { text: "San Marino", correct: false }
        ]
    },
    {
        question: "Who invented the telephone?",
        answers: [
            { text: "Thomas Edison", correct: false },
            { text: "Alexander Graham Bell", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Guglielmo Marconi", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Gd", correct: false },
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Pt", correct: false }
        ]
    },
    {
        question: "Which famous ship sank in 1912?",
        answers: [
            { text: "Queen Mary", correct: false },
            { text: "Titanic", correct: true },
            { text: "Bismarck", correct: false },
            { text: "Lusitania", correct: false }
        ]
    },
    {
        question: "In which year did World War II end?",
        answers: [
            { text: "1945", correct: true },
            { text: "1939", correct: false },
            { text: "1941", correct: false },
            { text: "1950", correct: false }
        ]
    },
    {
        question: "What is the fastest land animal?",
        answers: [
            { text: "Cheetah", correct: true },
            { text: "Lion", correct: false },
            { text: "Leopard", correct: false },
            { text: "Tiger", correct: false }
        ]
    },

    // 21 - 30
    {
        question: "Who is known as the Father of Computers?",
        answers: [
            { text: "Charles Babbage", correct: true },
            { text: "Alan Turing", correct: false },
            { text: "John von Neumann", correct: false },
            { text: "Bill Gates", correct: false }
        ]
    },
    {
        question: "What is the largest continent?",
        answers: [
            { text: "Africa", correct: false },
            { text: "Asia", correct: true },
            { text: "Europe", correct: false },
            { text: "North America", correct: false }
        ]
    },
    {
        question: "Which country hosted the 2020 Summer Olympics?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Brazil", correct: false },
            { text: "USA", correct: false }
        ]
    },
    {
        question: "What is the hardest known substance?",
        answers: [
            { text: "Steel", correct: false },
            { text: "Graphene", correct: false },
            { text: "Diamond", correct: true },
            { text: "Titanium", correct: false }
        ]
    },
    {
        question: "Who directed 'Inception'?",
        answers: [
            { text: "Christopher Nolan", correct: true },
            { text: "Steven Spielberg", correct: false },
            { text: "Quentin Tarantino", correct: false },
            { text: "James Cameron", correct: false }
        ]
    },
    {
        question: "What is the most populous country?",
        answers: [
            { text: "USA", correct: false },
            { text: "India", correct: false },
            { text: "China", correct: true },
            { text: "Russia", correct: false }
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            { text: "Sahara Desert", correct: false },
            { text: "Antarctic Desert", correct: true },
            { text: "Gobi Desert", correct: false },
            { text: "Kalahari Desert", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Niels Bohr", correct: false }
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Vancouver", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Montreal", correct: false }
        ]
    },
    {
        question: "Which mammal is known to lay eggs?",
        answers: [
            { text: "Kangaroo", correct: false },
            { text: "Platypus", correct: true },
            { text: "Whale", correct: false },
            { text: "Elephant", correct: false }
        ]
    },

    // 31 - 40
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Leo Tolstoy", correct: false }
        ]
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Helium", correct: false }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "1912", correct: true },
            { text: "1915", correct: false },
            { text: "1920", correct: false },
            { text: "1908", correct: false }
        ]
    },
    {
        question: "Which planet is closest to the Sun?",
        answers: [
            { text: "Venus", correct: false },
            { text: "Mercury", correct: true },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "Who is the author of the Harry Potter series?",
        answers: [
            { text: "J.K. Rowling", correct: true },
            { text: "J.R.R. Tolkien", correct: false },
            { text: "George R.R. Martin", correct: false },
            { text: "C.S. Lewis", correct: false }
        ]
    },
    {
        question: "Which bird is known for being flightless?",
        answers: [
            { text: "Eagle", correct: false },
            { text: "Penguin", correct: true },
            { text: "Parrot", correct: false },
            { text: "Sparrow", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for water?",
        answers: [
            { text: "CO2", correct: false },
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "H2SO4", correct: false }
        ]
    },
    {
        question: "What is the primary ingredient in guacamole?",
        answers: [
            { text: "Tomato", correct: false },
            { text: "Avocado", correct: true },
            { text: "Potato", correct: false },
            { text: "Spinach", correct: false }
        ]
    },
    {
        question: "Which country is home to the kangaroo?",
        answers: [
            { text: "Australia", correct: true },
            { text: "USA", correct: false },
            { text: "India", correct: false },
            { text: "South Africa", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water?",
        answers: [
            { text: "90°C", correct: false },
            { text: "100°C", correct: true },
            { text: "110°C", correct: false },
            { text: "150°C", correct: false }
        ]
    },

    // 41 - 50
    {
        question: "Who was the first person to walk on the moon?",
        answers: [
            { text: "Buzz Aldrin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Yuri Gagarin", correct: false },
            { text: "Michael Collins", correct: false }
        ]
    },
    {
        question: "What is the most widely spoken language in the world?",
        answers: [
            { text: "Spanish", correct: false },
            { text: "English", correct: false },
            { text: "Mandarin Chinese", correct: true },
            { text: "Hindi", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "Which famous scientist developed the laws of motion?",
        answers: [
            { text: "Isaac Newton", correct: true },
            { text: "Albert Einstein", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Stephen Hawking", correct: false }
        ]
    },
    {
        question: "Which city is known as the Big Apple?",
        answers: [
            { text: "Los Angeles", correct: false },
            { text: "Chicago", correct: false },
            { text: "New York City", correct: true },
            { text: "Miami", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in sushi?",
        answers: [
            { text: "Fish", correct: true },
            { text: "Rice", correct: false },
            { text: "Seaweed", correct: false },
            { text: "Vegetables", correct: false }
        ]
    },
    {
        question: "In what year did the Berlin Wall fall?",
        answers: [
            { text: "1989", correct: true },
            { text: "1990", correct: false },
            { text: "1991", correct: false },
            { text: "1987", correct: false }
        ]
    },
    {
        question: "Which vitamin is known as the 'sunshine vitamin'?",
        answers: [
            { text: "Vitamin C", correct: false },
            { text: "Vitamin D", correct: true },
            { text: "Vitamin A", correct: false },
            { text: "Vitamin K", correct: false }
        ]
    },
    {
        question: "What is the capital of Italy?",
        answers: [
            { text: "Milan", correct: false },
            { text: "Rome", correct: true },
            { text: "Florence", correct: false },
            { text: "Venice", correct: false }
        ]
    },
    {
        question: "What is the currency of Japan?",
        answers: [
            { text: "Yen", correct: true },
            { text: "Won", correct: false },
            { text: "Dollar", correct: false },
            { text: "Euro", correct: false }
        ]
    },

    // 51 - 60
    {
        question: "Who was the first woman to fly solo across the Atlantic Ocean?",
        answers: [
            { text: "Amelia Earhart", correct: true },
            { text: "Harriet Quimby", correct: false },
            { text: "Bessie Coleman", correct: false },
            { text: "Jacqueline Cochran", correct: false }
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Heart", correct: false },
            { text: "Liver", correct: false },
            { text: "Skin", correct: true },
            { text: "Lungs", correct: false }
        ]
    },
    {
        question: "What is the main language spoken in Brazil?",
        answers: [
            { text: "Spanish", correct: false },
            { text: "Portuguese", correct: true },
            { text: "English", correct: false },
            { text: "French", correct: false }
        ]
    },
    {
        question: "What is the primary ingredient in hummus?",
        answers: [
            { text: "Chickpeas", correct: true },
            { text: "Lentils", correct: false },
            { text: "Beans", correct: false },
            { text: "Rice", correct: false }
        ]
    },
    {
        question: "Which is the smallest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Mercury", correct: true },
            { text: "Venus", correct: false },
            { text: "Pluto", correct: false }
        ]
    },
    {
        question: "Which planet is known for its rings?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Mars", correct: false },
            { text: "Saturn", correct: true },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What is the main gas found in the air we breathe?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "In which country would you find the Great Pyramid of Giza?",
        answers: [
            { text: "Egypt", correct: true },
            { text: "Greece", correct: false },
            { text: "Mexico", correct: false },
            { text: "Peru", correct: false }
        ]
    },
    {
        question: "What is the longest bone in the human body?",
        answers: [
            { text: "Femur", correct: true },
            { text: "Tibia", correct: false },
            { text: "Fibula", correct: false },
            { text: "Humerus", correct: false }
        ]
    },
    {
        question: "Who invented the light bulb?",
        answers: [
            { text: "Thomas Edison", correct: true },
            { text: "Nikola Tesla", correct: false },
            { text: "Benjamin Franklin", correct: false },
            { text: "Alexander Graham Bell", correct: false }
        ]
    },

    // 61 - 70
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "Japan", correct: true },
            { text: "China", correct: false },
            { text: "Thailand", correct: false },
            { text: "South Korea", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Graphite", correct: false },
            { text: "Diamond", correct: true },
            { text: "Gold", correct: false },
            { text: "Iron", correct: false }
        ]
    },
    {
        question: "Who is known as the King of Pop?",
        answers: [
            { text: "Elvis Presley", correct: false },
            { text: "Michael Jackson", correct: true },
            { text: "Prince", correct: false },
            { text: "Madonna", correct: false }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false },
            { text: "Canberra", correct: true },
            { text: "Melbourne", correct: false },
            { text: "Brisbane", correct: false }
        ]
    },
    {
        question: "What is the largest island in the world?",
        answers: [
            { text: "Greenland", correct: true },
            { text: "New Guinea", correct: false },
            { text: "Borneo", correct: false },
            { text: "Madagascar", correct: false }
        ]
    },
    {
        question: "What is the capital of Greece?",
        answers: [
            { text: "Athens", correct: true },
            { text: "Rome", correct: false },
            { text: "Cairo", correct: false },
            { text: "Istanbul", correct: false }
        ]
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        answers: [
            { text: "Leonardo da Vinci", correct: false },
            { text: "Michelangelo", correct: true },
            { text: "Raphael", correct: false },
            { text: "Donatello", correct: false }
        ]
    },
    {
        question: "What is the capital of Spain?",
        answers: [
            { text: "Barcelona", correct: false },
            { text: "Madrid", correct: true },
            { text: "Seville", correct: false },
            { text: "Valencia", correct: false }
        ]
    },
    {
        question: "What is the name of the longest river in South America?",
        answers: [
            { text: "Amazon River", correct: true },
            { text: "Nile River", correct: false },
            { text: "Yangtze River", correct: false },
            { text: "Mississippi River", correct: false }
        ]
    },
    {
        question: "Which country is known for the Great Wall?",
        answers: [
            { text: "India", correct: false },
            { text: "China", correct: true },
            { text: "Japan", correct: false },
            { text: "Korea", correct: false }
        ]
    },

    // 71 - 80
    {
        question: "What is the currency of the United Kingdom?",
        answers: [
            { text: "Dollar", correct: false },
            { text: "Pound", correct: true },
            { text: "Euro", correct: false },
            { text: "Yen", correct: false }
        ]
    },
    {
        question: "Who is known as the Father of Modern Physics?",
        answers: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Niels Bohr", correct: false },
            { text: "Galileo Galilei", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in bread?",
        answers: [
            { text: "Flour", correct: true },
            { text: "Sugar", correct: false },
            { text: "Yeast", correct: false },
            { text: "Water", correct: false }
        ]
    },
    {
        question: "What is the largest animal in the world?",
        answers: [
            { text: "Elephant", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Giraffe", correct: false },
            { text: "Great White Shark", correct: false }
        ]
    },
    {
        question: "What is the currency of India?",
        answers: [
            { text: "Dollar", correct: false },
            { text: "Rupee", correct: true },
            { text: "Yen", correct: false },
            { text: "Ringgit", correct: false }
        ]
    },
    {
        question: "Which country is known for its pyramids?",
        answers: [
            { text: "Mexico", correct: false },
            { text: "Egypt", correct: true },
            { text: "China", correct: false },
            { text: "India", correct: false }
        ]
    },
    {
        question: "Who was the first female Prime Minister of the UK?",
        answers: [
            { text: "Margaret Thatcher", correct: true },
            { text: "Theresa May", correct: false },
            { text: "Angela Merkel", correct: false },
            { text: "Golda Meir", correct: false }
        ]
    },
    {
        question: "What is the capital city of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "Berlin", correct: false },
            { text: "Rome", correct: false },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for sodium?",
        answers: [
            { text: "Na", correct: true },
            { text: "S", correct: false },
            { text: "So", correct: false },
            { text: "Sn", correct: false }
        ]
    },
    {
        question: "Which fruit is known as the 'king of fruits'?",
        answers: [
            { text: "Apple", correct: false },
            { text: "Mango", correct: false },
            { text: "Durian", correct: true },
            { text: "Banana", correct: false }
        ]
    },

    // 81 - 90
    {
        question: "What is the main ingredient in pesto?",
        answers: [
            { text: "Basil", correct: true },
            { text: "Parsley", correct: false },
            { text: "Mint", correct: false },
            { text: "Cilantro", correct: false }
        ]
    },
    {
        question: "What does DNA stand for?",
        answers: [
            { text: "Deoxyribonucleic Acid", correct: true },
            { text: "Deoxyribonitric Acid", correct: false },
            { text: "Dinitrogen Acid", correct: false },
            { text: "Dihydrogen Acid", correct: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the primary ingredient in tofu?",
        answers: [
            { text: "Soybeans", correct: true },
            { text: "Peanuts", correct: false },
            { text: "Wheat", correct: false },
            { text: "Rice", correct: false }
        ]
    },
    {
        question: "What is the main language spoken in Brazil?",
        answers: [
            { text: "Spanish", correct: false },
            { text: "Portuguese", correct: true },
            { text: "English", correct: false },
            { text: "French", correct: false }
        ]
    },
    {
        question: "Who discovered penicillin?",
        answers: [
            { text: "Louis Pasteur", correct: false },
            { text: "Alexander Fleming", correct: true },
            { text: "Marie Curie", correct: false },
            { text: "Joseph Lister", correct: false }
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Toronto", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Vancouver", correct: false },
            { text: "Montreal", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in a traditional French ratatouille?",
        answers: [
            { text: "Zucchini", correct: false },
            { text: "Eggplant", correct: true },
            { text: "Tomato", correct: false },
            { text: "Bell pepper", correct: false }
        ]
    },
    {
        question: "What is the most widely spoken language in the world?",
        answers: [
            { text: "Spanish", correct: false },
            { text: "English", correct: false },
            { text: "Mandarin Chinese", correct: true },
            { text: "Hindi", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water?",
        answers: [
            { text: "90°C", correct: false },
            { text: "100°C", correct: true },
            { text: "110°C", correct: false },
            { text: "150°C", correct: false }
        ]
    },

    // 91 - 100
    {
        question: "What is the currency of Australia?",
        answers: [
            { text: "Dollar", correct: true },
            { text: "Pound", correct: false },
            { text: "Euro", correct: false },
            { text: "Yen", correct: false }
        ]
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        answers: [
            { text: "Jane Austen", correct: true },
            { text: "Charlotte Brontë", correct: false },
            { text: "Emily Brontë", correct: false },
            { text: "Mary Shelley", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for table salt?",
        answers: [
            { text: "NaCl", correct: true },
            { text: "KCl", correct: false },
            { text: "CaCl2", correct: false },
            { text: "MgCl2", correct: false }
        ]
    },
    {
        question: "Which ocean is the largest?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Which country is famous for the Taj Mahal?",
        answers: [
            { text: "Pakistan", correct: false },
            { text: "Bangladesh", correct: false },
            { text: "India", correct: true },
            { text: "Nepal", correct: false }
        ]
    },
    {
        question: "What is the capital of Germany?",
        answers: [
            { text: "Berlin", correct: true },
            { text: "Munich", correct: false },
            { text: "Frankfurt", correct: false },
            { text: "Hamburg", correct: false }
        ]
    },
    {
        question: "What is the primary gas in the Earth's atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Argon", correct: false }
        ]
    },
    {
        question: "Who is the author of 'The Great Gatsby'?",
        answers: [
            { text: "F. Scott Fitzgerald", correct: true },
            { text: "Ernest Hemingway", correct: false },
            { text: "John Steinbeck", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "What is the capital of Brazil?",
        answers: [
            { text: "Rio de Janeiro", correct: false },
            { text: "São Paulo", correct: false },
            { text: "Brasília", correct: true },
            { text: "Salvador", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in a Caesar salad?",
        answers: [
            { text: "Romaine lettuce", correct: true },
            { text: "Iceberg lettuce", correct: false },
            { text: "Spinach", correct: false },
            { text: "Kale", correct: false }
        ]
    },
    {
        question: "Which country is known for the Eiffel Tower?",
        answers: [
            { text: "Italy", correct: false },
            { text: "Spain", correct: false },
            { text: "France", correct: true },
            { text: "Germany", correct: false }
        ]
    }
];

// export default quizQuestions;


let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let timeLeft = 30;
let timer;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const streakElement = document.getElementById('streak');
const timerElement = document.getElementById('timer');
const feedbackElement = document.getElementById('feedback');
const hintButton = document.getElementById('hint');
const skipButton = document.getElementById('skip');

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    scoreElement.innerText = `Score: ${score}`;
    streakElement.innerText = `Streak: ${streak}`;
    nextButton.classList.add('hide');
    startTimer();
    showQuestion();
}

function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    feedbackElement.innerText = '';
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        selectedButton.classList.add('correct');
        score += 10;
        streak += 1;
    } else {
        selectedButton.classList.add('incorrect');
        streak = 0;
    }
    scoreElement.innerText = `Score: ${score}`;
    streakElement.innerText = `Streak: ${streak}`;
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    nextButton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Quiz Finished!');
        clearInterval(timer);
    }
    nextButton.classList.add('hide');
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = `Time Left: ${timeLeft}s`;
        if (timeLeft === 0) {
            clearInterval(timer);
            alert('Time is up!');
            nextButton.classList.remove('hide');
        }
    }, 1000);
}

hintButton.addEventListener('click', () => {
    // 50/50 lifeline implementation
    const buttons = Array.from(answerButtonsElement.children);
    const wrongAnswers = buttons.filter(button => !button.dataset.correct);
    wrongAnswers.slice(0, 2).forEach(button => button.classList.add('hide'));
    hintButton.disabled = true; // Can only use once
});

skipButton.addEventListener('click', () => {
    nextQuestion();
    skipButton.disabled = true;
});

nextButton.addEventListener('click', nextQuestion);

startGame();
