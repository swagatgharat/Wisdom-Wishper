const quotes = {
    "Inspirational Quotes": [
    // 1
    "The only way to do great work is to love what you do. – Steve Jobs",
    // 2
    "The best way to predict the future is to invent it. – Alan Kay",
    // 3
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    // 4
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    // 5
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    // 6
    "Act as if what you do makes a difference. It does. – William James",
    // 7
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    // 8
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 9
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 10
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    // 11
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 12
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    // 13
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    // 14
    "Opportunities don't happen. You create them. – Chris Grosser",
    // 15
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    // 16
    "We may encounter many defeats but we must not be defeated. – Maya Angelou",
    // 17
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    // 18
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    // 19
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    // 20
    "Life is what happens when you’re busy making other plans. – John Lennon",
    // 21
    "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
    // 22
    "The best revenge is massive success. – Frank Sinatra",
    // 23
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    // 24
    "I have not failed. I've just found 10,000 ways that won't work. – Thomas Edison",
    // 25
    "A person who never made a mistake never tried anything new. – Albert Einstein",
    // 26
    "The mind is everything. What you think you become. – Buddha",
    // 27
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    // 28
    "We don’t make mistakes, just happy little accidents. – Bob Ross",
    // 29
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 30
    "In three words I can sum up everything I've learned about life: it goes on. – Robert Frost",
    // 31
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    // 32
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    // 33
    "Everything has beauty, but not everyone can see. – Confucius",
    // 34
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    // 35
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    // 36
    "You are enough just as you are. – Meghan Markle",
    // 37
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    // 38
    "Your life does not get better by chance, it gets better by change. – Jim Rohn",
    // 39
    "Dream big and dare to fail. – Norman Vaughan",
    // 40
    "Everything you can imagine is real. – Pablo Picasso",
    // 41
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
    // 42
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 43
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
    // 44
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
    // 45
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    // 46
    "The harder you work for something, the greater you’ll feel when you achieve it. – Anonymous",
    // 47
    "Dream it. Believe it. Build it. – Anonymous",
    // 48
    "Motivation is what gets you started. Habit is what keeps you going. – Jim Ryun",
    // 49
    "Your limitation—it's only your imagination. – Anonymous",
    // 50
    "Push yourself, because no one else is going to do it for you. – Anonymous",
    // 51
    "Great things never come from comfort zones. – Anonymous",
    // 52
    "Dream it. Wish it. Do it. – Anonymous",
    // 53
    "Success doesn’t just find you. You have to go out and get it. – Anonymous",
    // 54
    "The harder you work, the more you will get. – Anonymous",
    // 55
    "Dream bigger. Do bigger. – Anonymous",
    // 56
    "Don’t stop when you’re tired. Stop when you’re done. – Anonymous",
    // 57
    "Wake up with determination. Go to bed with satisfaction. – Anonymous",
    // 58
    "Do something today that your future self will thank you for. – Anonymous",
    // 59
    "Little things make big days. – Anonymous",
    // 60
    "It’s going to be hard, but hard does not mean impossible. – Anonymous",
    // 61
    "Don’t wait for opportunity. Create it. – Anonymous",
    // 62
    "Dream it. Believe it. Chase it. – Anonymous",
    // 63
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently. – Anonymous",
    // 64
    "You don’t have to be perfect to be amazing. – Anonymous",
    // 65
    "Don’t wait for the perfect moment. Take the moment and make it perfect. – Anonymous",
    // 66
    "The key to success is to focus on goals, not obstacles. – Anonymous",
    // 67
    "Dream it. Believe it. Work for it. – Anonymous",
    // 68
    "Success is not for the chosen few, but for those who choose to be successful. – Anonymous",
    // 69
    "You are stronger than you think. – Anonymous",
    // 70
    "Believe in yourself and all that you are. – Anonymous",
    // 71
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 72
    "Dream big and dare to fail. – Norman Vaughan",
    // 73
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    // 74
    "Life is what happens when you’re busy making other plans. – John Lennon",
    // 75
    "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
    // 76
    "I have not failed. I've just found 10,000 ways that won't work. – Thomas Edison",
    // 77
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    // 78
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 79
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    // 80
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 81
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    // 82
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    // 83
    "Opportunities don't happen. You create them. – Chris Grosser",
    // 84
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    // 85
    "We may encounter many defeats but we must not be defeated. – Maya Angelou",
    // 86
    "The only person you are destined to become is the person you decide to be. – Ralph Waldo Emerson",
    // 87
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    // 88
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    // 89
    "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
    // 90
    "We don’t make mistakes, just happy little accidents. – Bob Ross",
    // 91
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 92
    "In three words I can sum up everything I've learned about life: it goes on. – Robert Frost",
    // 93
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    // 94
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    // 95
    "Everything has beauty, but not everyone can see. – Confucius",
    // 96
    "You are enough just as you are. – Meghan Markle",
    // 97
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    // 98
    "Your life does not get better by chance, it gets better by change. – Jim Rohn",
    // 99
    "Dream bigger. Do bigger. – Anonymous",
    // 100
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh"
    ],

    "Love Quotes": [
    // 1
    "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams. – Dr. Seuss",
    // 2
    "The greatest thing you’ll ever learn is just to love and be loved in return. – Eden Ahbez",
    // 3
    "I would rather spend one lifetime with you, than face all the ages of this world alone. – J.R.R. Tolkien",
    // 4
    "Love is composed of a single soul inhabiting two bodies. – Aristotle",
    // 5
    "The way to know life is to love many things. – Vincent Van Gogh",
    // 6
    "I have found the one whom my soul loves. – Song of Solomon 3:4",
    // 7
    "To love and be loved is to feel the sun from both sides. – David Viscott",
    // 8
    "Every love story is beautiful, but ours is my favorite. – Anonymous",
    // 9
    "Love is an endless act of forgiveness. – Martin Luther King Jr.",
    // 10
    "I’ve fallen in love many times… always with you. – Anonymous",
    // 11
    "Love is not only something you feel, it is something you do. – David Wilkerson",
    // 12
    "I love you more than there are stars in the sky and fish in the sea. – Anonymous",
    // 13
    "You are my heart, my soul, my inspiration. – Anonymous",
    // 14
    "Whatever our souls are made of, his and mine are the same. – Emily Brontë",
    // 15
    "I can’t imagine my life without you. – Anonymous",
    // 16
    "You make my heart smile. – Anonymous",
    // 17
    "I knew I loved you before I met you. – Anonymous",
    // 18
    "Love is the only reality, and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation. – Rabindranath Tagore",
    // 19
    "Love does not dominate; it cultivates. – Johann Wolfgang von Goethe",
    // 20
    "You are the piece of me I didn’t know was missing. – Anonymous",
    // 21
    "Every day with you is a new adventure. – Anonymous",
    // 22
    "You are my greatest adventure. – Anonymous",
    // 23
    "If I had a flower for every time I thought of you, I could walk through my garden forever. – Alfred Lord Tennyson",
    // 24
    "To the world you may be one person, but to one person you are the world. – Dr. Seuss",
    // 25
    "Love is a friendship set to music. – Joseph Campbell",
    // 26
    "I love you to the moon and back. – Anonymous",
    // 27
    "I’m much more me when I’m with you. – Anonymous",
    // 28
    "Together is a wonderful place to be. – Anonymous",
    // 29
    "You are the love of my life. – Anonymous",
    // 30
    "You complete me. – Jerry Maguire",
    // 31
    "I could start a fire with what I feel for you. – Anonymous",
    // 32
    "You’re the reason I look forward to waking up every day. – Anonymous",
    // 33
    "Every moment with you is a treasure. – Anonymous",
    // 34
    "In your smile, I see my favorite place. – Anonymous",
    // 35
    "I am so in love with you that it’s breaking my heart. – Anonymous",
    // 36
    "You are the best thing that ever happened to me. – Anonymous",
    // 37
    "I never want to stop making memories with you. – Anonymous",
    // 38
    "You are my forever and always. – Anonymous",
    // 39
    "I’ve loved you for a thousand lifetimes and I’ll love you for a thousand more. – Anonymous",
    // 40
    "I love you not only for what you are but for what I am when I am with you. – Roy Croft",
    // 41
    "You are my heart’s greatest desire. – Anonymous",
    // 42
    "Your love is like a rainbow, a beautiful mix of colors. – Anonymous",
    // 43
    "I can’t imagine a day without you. – Anonymous",
    // 44
    "You’re my everything. – Anonymous",
    // 45
    "With you, I am home. – Anonymous",
    // 46
    "You make my world a better place. – Anonymous",
    // 47
    "You are my sunshine on a rainy day. – Anonymous",
    // 48
    "Love is the greatest refreshment in life. – Pablo Picasso",
    // 49
    "I love you more than words can express. – Anonymous",
    // 50
    "You are my heart’s deepest wish. – Anonymous",
    // 51
    "I would choose you in a hundred lifetimes, in a hundred worlds, in any version of reality. – Anonymous",
    // 52
    "Being in love with you makes every day an adventure. – Anonymous",
    // 53
    "You are my dream come true. – Anonymous",
    // 54
    "I love you for the person you are, the person you have been, and the person you are yet to become. – Anonymous",
    // 55
    "You are my person. – Anonymous",
    // 56
    "Every moment with you is a treasure. – Anonymous",
    // 57
    "You make my heart race. – Anonymous",
    // 58
    "You are my happily ever after. – Anonymous",
    // 59
    "I never knew love until I met you. – Anonymous",
    // 60
    "You are the one I’ve been waiting for. – Anonymous",
    // 61
    "My love for you is a journey; starting at forever and ending at never. – Anonymous",
    // 62
    "You are my heart’s home. – Anonymous",
    // 63
    "I love you more every day. – Anonymous",
    // 64
    "You are my soulmate. – Anonymous",
    // 65
    "I can’t imagine my life without you in it. – Anonymous",
    // 66
    "You are my one and only. – Anonymous",
    // 67
    "You are the light of my life. – Anonymous",
    // 68
    "Your love is a beautiful melody that fills my soul. – Anonymous",
    // 69
    "You are my forever. – Anonymous",
    // 70
    "I am completely in love with you. – Anonymous",
    // 71
    "You are the missing piece of my heart. – Anonymous",
    // 72
    "I love you to infinity and beyond. – Anonymous",
    // 73
    "You are my heart’s greatest joy. – Anonymous",
    // 74
    "With you, I feel complete. – Anonymous",
    // 75
    "You are the love I’ve been waiting for. – Anonymous",
    // 76
    "Every day with you is a blessing. – Anonymous",
    // 77
    "I love you more with every passing day. – Anonymous",
    // 78
    "You are my dream come true. – Anonymous",
    // 79
    "You are my forever. – Anonymous",
    // 80
    "You are my heart and soul. – Anonymous",
    // 81
    "I am so lucky to have you in my life. – Anonymous",
    // 82
    "You are my one and only. – Anonymous",
    // 83
    "I love you more than you’ll ever know. – Anonymous",
    // 84
    "You are my everything. – Anonymous",
    // 85
    "With you, I feel complete. – Anonymous",
    // 86
    "You are my heart’s greatest joy. – Anonymous",
    // 87
    "I love you to infinity and beyond. – Anonymous",
    // 88
    "You are the reason I wake up with a smile every morning. – Anonymous",
    // 89
    "You are the love of my life and my greatest treasure. – Anonymous",
    // 90
    "Being with you feels like a dream come true. – Anonymous",
    // 91
    "I love you more deeply than I ever thought possible. – Anonymous",
    // 92
    "You are my rock, my love, and my everything. – Anonymous",
    // 93
    "You make every day brighter just by being in it. – Anonymous",
    // 94
    "I am so grateful for every moment we share together. – Anonymous",
    // 95
    "You are my heart’s deepest treasure. – Anonymous",
    // 96
    "My love for you grows stronger with each passing day. – Anonymous",
    // 97
    "You are the most precious part of my life. – Anonymous",
    // 98
    "I am forever yours, just as you are mine. – Anonymous",
    // 99
    "You are my everything, now and forever. – Anonymous",
    // 100
    "Every day with you is a beautiful adventure. – Anonymous"
    ],

    "Life Quotes": [
    // 1
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    // 2
    "In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost",
    // 3
    "Life is what happens when you’re busy making other plans. – John Lennon",
    // 4
    "The only impossible journey is the one you never begin. – Tony Robbins",
    // 5
    "Life isn’t about finding yourself. Life is about creating yourself. – George Bernard Shaw",
    // 6
    "You only live once, but if you do it right, once is enough. – Mae West",
    // 7
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    // 8
    "The biggest adventure you can take is to live the life of your dreams. – Oprah Winfrey",
    // 9
    "Life is really simple, but we insist on making it complicated. – Confucius",
    // 10
    "The best way to predict the future is to create it. – Peter Drucker",
    // 11
    "Life is short, and it is up to you to make it sweet. – Sarah Louise Delany",
    // 12
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    // 13
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    // 14
    "Life is a journey that must be traveled no matter how bad the roads and accommodations. – Oliver Goldsmith",
    // 15
    "The good life is one inspired by love and guided by knowledge. – Bertrand Russell",
    // 16
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away. – Anonymous",
    // 17
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 18
    "Life is either a great adventure or nothing. – Helen Keller",
    // 19
    "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
    // 20
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    // 21
    "Life is what we make it, always has been, always will be. – Grandma Moses",
    // 22
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    // 23
    "Life isn’t about waiting for the storm to pass, it’s about learning how to dance in the rain. – Vivian Greene",
    // 24
    "We do not remember days; we remember moments. – Cesare Pavese",
    // 25
    "The only way to have a friend is to be one. – Ralph Waldo Emerson",
    // 26
    "Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein",
    // 27
    "Everything has beauty, but not everyone can see. – Confucius",
    // 28
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    // 29
    "Life is a succession of lessons which must be lived to be understood. – Helen Keller",
    // 30
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    // 31
    "Life is about making an impact, not making an income. – Kevin Kruse",
    // 32
    "The only way to do great work is to love what you do. – Steve Jobs",
    // 33
    "The best revenge is massive success. – Frank Sinatra",
    // 34
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 35
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    // 36
    "Act as if what you do makes a difference. It does. – William James",
    // 37
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 38
    "Life is really simple, but we insist on making it complicated. – Confucius",
    // 39
    "You only live once, but if you do it right, once is enough. – Mae West",
    // 40
    "Life is what happens when you’re busy making other plans. – John Lennon",
    // 41
    "The best way to predict the future is to create it. – Peter Drucker",
    // 42
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    // 43
    "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
    // 44
    "Life is a journey that must be traveled no matter how bad the roads and accommodations. – Oliver Goldsmith",
    // 45
    "The good life is one inspired by love and guided by knowledge. – Bertrand Russell",
    // 46
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    // 47
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 48
    "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
    // 49
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    // 50
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    // 51
    "Life is not measured by the number of breaths we take, but by the moments that take our breath away. – Anonymous",
    // 52
    "In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost",
    // 53
    "Life is either a great adventure or nothing. – Helen Keller",
    // 54
    "Everything has beauty, but not everyone can see. – Confucius",
    // 55
    "We do not remember days; we remember moments. – Cesare Pavese",
    // 56
    "Life isn’t about waiting for the storm to pass, it’s about learning how to dance in the rain. – Vivian Greene",
    // 57
    "The only way to have a friend is to be one. – Ralph Waldo Emerson",
    // 58
    "Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein",
    // 59
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    // 60
    "Life is about making an impact, not making an income. – Kevin Kruse",
    // 61
    "The best revenge is massive success. – Frank Sinatra",
    // 62
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 63
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    // 64
    "Act as if what you do makes a difference. It does. – William James",
    // 65
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 66
    "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
    // 67
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 68
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    // 69
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    // 70
    "Life is really simple, but we insist on making it complicated. – Confucius",
    // 71
    "You only live once, but if you do it right, once is enough. – Mae West",
    // 72
    "Life is what happens when you’re busy making other plans. – John Lennon",
    // 73
    "The best way to predict the future is to create it. – Peter Drucker",
    // 74
    "Life is a journey that must be traveled no matter how bad the roads and accommodations. – Oliver Goldsmith",
    // 75
    "The good life is one inspired by love and guided by knowledge. – Bertrand Russell",
    // 76
    "In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost",
    // 77
    "Life is either a great adventure or nothing. – Helen Keller",
    // 78
    "Everything has beauty, but not everyone can see. – Confucius",
    // 79
    "We do not remember days; we remember moments. – Cesare Pavese",
    // 80
    "Life isn’t about waiting for the storm to pass, it’s about learning how to dance in the rain. – Vivian Greene",
    // 81
    "The only way to have a friend is to be one. – Ralph Waldo Emerson",
    // 82
    "Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein",
    // 83
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    // 84
    "Life is about making an impact, not making an income. – Kevin Kruse",
    // 85
    "The best revenge is massive success. – Frank Sinatra",
    // 86
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 87
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    // 88
    "Act as if what you do makes a difference. It does. – William James",
    // 89
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 90
    "Do not wait to strike till the iron is hot, but make it hot by striking. – William Butler Yeats",
    // 91
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 92
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    // 93
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    // 94
    "Life is really simple, but we insist on making it complicated. – Confucius",
    // 95
    "You only live once, but if you do it right, once is enough. – Mae West",
    // 96
    "Life is what happens when you’re busy making other plans. – John Lennon",
    // 97
    "The best way to predict the future is to create it. – Peter Drucker",
    // 98
    "Life is a journey that must be traveled no matter how bad the roads and accommodations. – Oliver Goldsmith",
    // 99
    "The good life is one inspired by love and guided by knowledge. – Bertrand Russell",
    // 100
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis"
    ],

    "Friendship Quotes": [
    // 1
    "A friend is someone who knows all about you and still loves you. – Elbert Hubbard",
    // 2
    "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.' – C.S. Lewis",
    // 3
    "A true friend is one who overlooks your failures and tolerates your success! – Doug Larson",
    // 4
    "Friendship is the only cement that will ever hold the world together. – Woodrow Wilson",
    // 5
    "A friend is someone who gives you total freedom to be yourself. – Jim Morrison",
    // 6
    "There is nothing on this earth more to be prized than true friendship. – Thomas Aquinas",
    // 7
    "The most beautiful discovery true friends make is that they can grow separately without growing apart. – Elisabeth Foley",
    // 8
    "True friends are like diamonds—bright, beautiful, valuable, and always in style. – Nicole Richie",
    // 9
    "Friends are the siblings God never gave us. – Mencius",
    // 10
    "A friend is what the heart needs all the time. – Henry Van Dyke",
    // 11
    "The only way to have a friend is to be one. – Ralph Waldo Emerson",
    // 12
    "A real friend is one who walks in when the rest of the world walks out. – Walter Winchell",
    // 13
    "Friendship improves happiness and abates misery, by the doubling of our joy and the dividing of our grief. – Marcus Tullius Cicero",
    // 14
    "True friends are never apart, maybe in distance but never in heart. – Anonymous",
    // 15
    "A friend is someone who understands your past, believes in your future, and accepts you just the way you are. – Anonymous",
    // 16
    "Friends are those rare people who ask how you are and then wait to hear the answer. – Ed Cunningham",
    // 17
    "A friend to all is a friend to none. – Aristotle",
    // 18
    "In the cookie of life, friends are the chocolate chips. – Salman Rushdie",
    // 19
    "Friendship is not about whom you have known the longest, it’s about who came and never left your side. – Anonymous",
    // 20
    "A good friend knows all your stories. A best friend helped you create them. – Anonymous",
    // 21
    "A friend is someone who makes it easy to believe in yourself. – Heidi Wills",
    // 22
    "A true friend is somebody who can make you laugh when you feel like crying. – Anonymous",
    // 23
    "Friends are the family we choose for ourselves. – Edna Buchanan",
    // 24
    "The language of friendship is not words but meanings. – Henry David Thoreau",
    // 25
    "Friendship is like a rainbow between two hearts. – Anonymous",
    // 26
    "A friend is one who knows you and loves you just the same. – Elbert Hubbard",
    // 27
    "The best time to make friends is before you need them. – Ethel Barrymore",
    // 28
    "A friend is someone who makes you feel better about yourself. – Anonymous",
    // 29
    "A friend is a treasure beyond measure. – Anonymous",
    // 30
    "The greatest gift of life is friendship, and I have received it. – Hubert H. Humphrey",
    // 31
    "True friends are like stars; you can only recognize them when it’s dark around you. – Anonymous",
    // 32
    "A friend is someone who can see the truth and pain in you even when you are fooling everyone else. – Anonymous",
    // 33
    "The best mirror is an old friend. – George Herbert",
    // 34
    "A friend is someone who makes it easy to believe in yourself. – Heidi Wills",
    // 35
    "A friend is someone who believes in you when you have ceased to believe in yourself. – Anonymous",
    // 36
    "There are no strangers here; only friends you haven’t yet met. – William Butler Yeats",
    // 37
    "A friend is one who believes in you when you have ceased to believe in yourself. – Anonymous",
    // 38
    "The most I can do for my friend is simply be his friend. – Henry David Thoreau",
    // 39
    "The best way to destroy an enemy is to make him a friend. – Abraham Lincoln",
    // 40
    "A true friend is one who overlooks your failures and tolerates your success. – Doug Larson",
    // 41
    "The greatest gift of life is friendship, and I have received it. – Hubert H. Humphrey",
    // 42
    "A true friend is someone who is there for you when they would rather be anywhere else. – Len Wein",
    // 43
    "Friendship is like a rainbow between two hearts. – Anonymous",
    // 44
    "A friend is someone who understands your past, believes in your future, and accepts you just the way you are. – Anonymous",
    // 45
    "True friends are like diamonds—bright, beautiful, valuable, and always in style. – Nicole Richie",
    // 46
    "The most beautiful discovery true friends make is that they can grow separately without growing apart. – Elisabeth Foley",
    // 47
    "A friend is someone who makes you feel better about yourself. – Anonymous",
    // 48
    "Friends are the family we choose for ourselves. – Edna Buchanan",
    // 49
    "A friend is a treasure beyond measure. – Anonymous",
    // 50
    "The best time to make friends is before you need them. – Ethel Barrymore",
    // 51
    "A friend is someone who knows all about you and still loves you. – Elbert Hubbard",
    // 52
    "The language of friendship is not words but meanings. – Henry David Thoreau",
    // 53
    "A true friend is one who overlooks your failures and tolerates your success. – Doug Larson",
    // 54
    "The best mirror is an old friend. – George Herbert",
    // 55
    "A friend is someone who makes it easy to believe in yourself. – Heidi Wills",
    // 56
    "A true friend is somebody who can make you laugh when you feel like crying. – Anonymous",
    // 57
    "True friends are never apart, maybe in distance but never in heart. – Anonymous",
    // 58
    "A friend is someone who knows all about you and still loves you. – Elbert Hubbard",
    // 59
    "The most beautiful discovery true friends make is that they can grow separately without growing apart. – Elisabeth Foley",
    // 60
    "A friend is one who believes in you when you have ceased to believe in yourself. – Anonymous",
    // 61
    "The best way to destroy an enemy is to make him a friend. – Abraham Lincoln",
    // 62
    "Friends are the siblings God never gave us. – Mencius",
    // 63
    "A true friend is one who walks in when the rest of the world walks out. – Walter Winchell",
    // 64
    "Friendship is like a rainbow between two hearts. – Anonymous",
    // 65
    "A friend is someone who knows all about you and still loves you. – Elbert Hubbard",
    // 66
    "The greatest gift of life is friendship, and I have received it. – Hubert H. Humphrey",
    // 67
    "A friend is someone who makes it easy to believe in yourself. – Heidi Wills",
    // 68
    "True friends are like diamonds—bright, beautiful, valuable, and always in style. – Nicole Richie",
    // 69
    "The most beautiful discovery true friends make is that they can grow separately without growing apart. – Elisabeth Foley",
    // 70
    "A friend is someone who understands your past, believes in your future, and accepts you just the way you are. – Anonymous",
    // 71
    "A friend is someone who knows all about you and still loves you. – Elbert Hubbard",
    // 72
    "The best time to make friends is before you need them. – Ethel Barrymore",
    // 73
    "A friend is someone who makes you feel better about yourself. – Anonymous",
    // 74
    "The most I can do for my friend is simply be his friend. – Henry David Thoreau",
    // 75
    "A friend is a treasure beyond measure. – Anonymous",
    // 76
    "A friend is someone who knows all about you and still loves you. – Elbert Hubbard",
    // 77
    "True friends are never apart, maybe in distance but never in heart. – Anonymous",
    // 78
    "A friend is someone who can see the truth and pain in you even when you are fooling everyone else. – Anonymous",
    // 79
    "The best time to make friends is before you need them. – Ethel Barrymore",
    // 80
    "A friend is one who believes in you when you have ceased to believe in yourself. – Anonymous",
    // 81
    "Friendship is not about whom you have known the longest, it’s about who came and never left your side. – Anonymous",
    // 82
    "Friends are those rare people who ask how you are and then wait to hear the answer. – Ed Cunningham",
    // 83
    "A friend is one who believes in you when you have ceased to believe in yourself. – Anonymous",
    // 84
    "A friend is someone who makes it easy to believe in yourself. – Heidi Wills",
    // 85
    "True friends are like stars; you can only recognize them when it’s dark around you. – Anonymous",
    // 86
    "The language of friendship is not words but meanings. – Henry David Thoreau",
    // 87
    "A friend is a treasure beyond measure. – Anonymous",
    // 88
    "The most beautiful discovery true friends make is that they can grow separately without growing apart. – Elisabeth Foley",
    // 89
    "A friend is someone who knows all about you and still loves you. – Elbert Hubbard",
    // 90
    "The best way to destroy an enemy is to make him a friend. – Abraham Lincoln",
    // 91
    "Friends are the siblings God never gave us. – Mencius",
    // 92
    "A true friend is someone who is there for you when they would rather be anywhere else. – Len Wein",
    // 93
    "Friendship is like a rainbow between two hearts. – Anonymous",
    // 94
    "A friend is one who believes in you when you have ceased to believe in yourself. – Anonymous",
    // 95
    "The most beautiful discovery true friends make is that they can grow separately without growing apart. – Elisabeth Foley",
    // 96
    "The greatest gift of life is friendship, and I have received it. – Hubert H. Humphrey",
    // 97
    "A friend is someone who understands your past, believes in your future, and accepts you just the way you are. – Anonymous",
    // 98
    "A friend is one who believes in you when you have ceased to believe in yourself. – Anonymous",
    // 99
    "True friends are never apart, maybe in distance but never in heart. – Anonymous",
    // 100
    "A true friend is someone who is there for you when they would rather be anywhere else. – Len Wein"
    ],

    "Humorous Quotes": [
    // 1
    "I’m on a seafood diet. I see food and I eat it. – Anonymous",
    // 2
    "I told my wife she was drawing her eyebrows too high. She looked surprised. – Anonymous",
    // 3
    "I used to play piano by ear, but now I use my hands. – Anonymous",
    // 4
    "Why don’t scientists trust atoms? Because they make up everything! – Anonymous",
    // 5
    "I’m reading a book about anti-gravity. It’s impossible to put down. – Anonymous",
    // 6
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats. – Anonymous",
    // 7
    "Parallel lines have so much in common. It’s a shame they’ll never meet. – Anonymous",
    // 8
    "I would avoid the sushi if I was you. It’s a little fishy. – Anonymous",
    // 9
    "Why don’t skeletons fight each other? They don’t have the guts. – Anonymous",
    // 10
    "I’m on a whiskey diet. I’ve lost three days already. – Anonymous",
    // 11
    "I would agree with you, but then we’d both be wrong. – Russell Lynes",
    // 12
    "I’m writing a book on reverse psychology. Please don’t buy it. – Anonymous",
    // 13
    "My wife told me to stop impersonating a flamingo. I had to put my foot down. – Anonymous",
    // 14
    "Why don’t some couples go to the gym? Because some relationships don’t work out. – Anonymous",
    // 15
    "I’m afraid for the calendar. Its days are numbered. – Anonymous",
    // 16
    "I used to be indecisive. Now I’m not so sure. – Anonymous",
    // 17
    "I told my doctor I broke my arm in two places. He told me to stop going to those places. – Anonymous",
    // 18
    "I’m on a 30-day diet. So far, I’ve lost 15 days. – Anonymous",
    // 19
    "I want to be a stand-up comedian, but I’m just sitting down. – Anonymous",
    // 20
    "I told my friend 10 jokes to make him laugh. Sadly, no pun in ten did. – Anonymous",
    // 21
    "Why don’t programmers like nature? It has too many bugs. – Anonymous",
    // 22
    "I’m so good at my job, I don’t even need to go to work. – Anonymous",
    // 23
    "I’m not arguing. I’m just explaining why I’m right. – Anonymous",
    // 24
    "I’m on a new diet. It’s called the ‘See Food’ diet. I see food and eat it. – Anonymous",
    // 25
    "I’m not lazy. I’m on energy-saving mode. – Anonymous",
    // 26
    "I’ve just written a song about tortillas; actually, it’s more of a rap. – Anonymous",
    // 27
    "I’m not lazy. I’m just highly motivated to do nothing. – Anonymous",
    // 28
    "Why did the scarecrow win an award? Because he was outstanding in his field. – Anonymous",
    // 29
    "I don’t suffer from insanity; I enjoy every minute of it. – Anonymous",
    // 30
    "My boss told me to have a good day, so I went home. – Anonymous",
    // 31
    "Why did the golfer bring two pairs of pants? In case he got a hole in one. – Anonymous",
    // 32
    "I would agree with you, but then we’d both be wrong. – Russell Lynes",
    // 33
    "I’m writing a book on reverse psychology. Please don’t buy it. – Anonymous",
    // 34
    "Why don’t scientists trust atoms? Because they make up everything! – Anonymous",
    // 35
    "I’m afraid for the calendar. Its days are numbered. – Anonymous",
    // 36
    "I used to play piano by ear, but now I use my hands. – Anonymous",
    // 37
    "I told my wife she was drawing her eyebrows too high. She looked surprised. – Anonymous",
    // 38
    "I’m reading a book about anti-gravity. It’s impossible to put down. – Anonymous",
    // 39
    "Why did the golfer bring two pairs of pants? In case he got a hole in one. – Anonymous",
    // 40
    "I’m afraid for the calendar. Its days are numbered. – Anonymous",
    // 41
    "I’m so good at my job, I don’t even need to go to work. – Anonymous",
    // 42
    "I’m not lazy. I’m on energy-saving mode. – Anonymous",
    // 43
    "I’m reading a book about anti-gravity. It’s impossible to put down. – Anonymous",
    // 44
    "I’m writing a book on reverse psychology. Please don’t buy it. – Anonymous",
    // 45
    "Why don’t skeletons fight each other? They don’t have the guts. – Anonymous",
    // 46
    "I’m not arguing. I’m just explaining why I’m right. – Anonymous",
    // 47
    "I would agree with you, but then we’d both be wrong. – Russell Lynes",
    // 48
    "I’m not lazy. I’m just highly motivated to do nothing. – Anonymous",
    // 49
    "I’m afraid for the calendar. Its days are numbered. – Anonymous",
    // 50
    "I’m reading a book about anti-gravity. It’s impossible to put down. – Anonymous",
    // 51
    "Why don’t some couples go to the gym? Because some relationships don’t work out. – Anonymous",
    // 52
    "I’m on a seafood diet. I see food and I eat it. – Anonymous",
    // 53
    "I’m on a whiskey diet. I’ve lost three days already. – Anonymous",
    // 54
    "I used to play piano by ear, but now I use my hands. – Anonymous",
    // 55
    "Why did the golfer bring two pairs of pants? In case he got a hole in one. – Anonymous",
    // 56
    "I’m afraid for the calendar. Its days are numbered. – Anonymous",
    // 57
    "I’m not arguing. I’m just explaining why I’m right. – Anonymous",
    // 58
    "I’m not lazy. I’m on energy-saving mode. – Anonymous",
    // 59
    "I’m so good at my job, I don’t even need to go to work. – Anonymous",
    // 60
    "I’m writing a book on reverse psychology. Please don’t buy it. – Anonymous",
    // 61
    "Why don’t scientists trust atoms? Because they make up everything! – Anonymous",
    // 62
    "I’m reading a book about anti-gravity. It’s impossible to put down. – Anonymous",
    // 63
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats. – Anonymous",
    // 64
    "Why don’t some couples go to the gym? Because some relationships don’t work out. – Anonymous",
    // 65
    "I’m not lazy. I’m just highly motivated to do nothing. – Anonymous",
    // 66
    "I’m on a seafood diet. I see food and I eat it. – Anonymous",
    // 67
    "I would avoid the sushi if I was you. It’s a little fishy. – Anonymous",
    // 68
    "I’m so good at my job, I don’t even need to go to work. – Anonymous",
    // 69
    "I’m afraid for the calendar. Its days are numbered. – Anonymous",
    // 70
    "I’m reading a book about anti-gravity. It’s impossible to put down. – Anonymous",
    // 71
    "I’m on a whiskey diet. I’ve lost three days already. – Anonymous",
    // 72
    "Why did the scarecrow win an award? Because he was outstanding in his field. – Anonymous",
    // 73
    "I don’t suffer from insanity; I enjoy every minute of it. – Anonymous",
    // 74
    "My boss told me to have a good day, so I went home. – Anonymous",
    // 75
    "I’ve just written a song about tortillas; actually, it’s more of a rap. – Anonymous",
    // 76
    "Why did the golfer bring two pairs of pants? In case he got a hole in one. – Anonymous",
    // 77
    "I’m not arguing. I’m just explaining why I’m right. – Anonymous",
    // 78
    "I’m so good at my job, I don’t even need to go to work. – Anonymous",
    // 79
    "I’m on a seafood diet. I see food and I eat it. – Anonymous",
    // 80
    "Why don’t skeletons fight each other? They don’t have the guts. – Anonymous",
    // 81
    "I’m not lazy. I’m just highly motivated to do nothing. – Anonymous",
    // 82
    "I told my wife she was drawing her eyebrows too high. She looked surprised. – Anonymous",
    // 83
    "I’m writing a book on reverse psychology. Please don’t buy it. – Anonymous",
    // 84
    "Why did the golfer bring two pairs of pants? In case he got a hole in one. – Anonymous",
    // 85
    "I’m afraid for the calendar. Its days are numbered. – Anonymous",
    // 86
    "I’m reading a book on anti-gravity. It’s impossible to put down. – Anonymous",
    // 87
    "I told my computer I needed a break, and now it won’t stop sending me Kit-Kats. – Anonymous",
    // 88
    "Why don’t some couples go to the gym? Because some relationships don’t work out. – Anonymous",
    // 89
    "I’m not lazy. I’m on energy-saving mode. – Anonymous",
    // 90
    "I’m so good at my job, I don’t even need to go to work. – Anonymous",
    // 91
    "I’m afraid for the calendar. Its days are numbered. – Anonymous",
    // 92
    "I’m reading a book about anti-gravity. It’s impossible to put down. – Anonymous",
    // 93
    "I would agree with you, but then we’d both be wrong. – Russell Lynes",
    // 94
    "I’m on a new diet. It’s called the ‘See Food’ diet. I see food and eat it. – Anonymous",
    // 95
    "I’m writing a book on reverse psychology. Please don’t buy it. – Anonymous",
    // 96
    "I’m not arguing. I’m just explaining why I’m right. – Anonymous",
    // 97
    "I told my wife she was drawing her eyebrows too high. She looked surprised. – Anonymous",
    // 98
    "I’m on a whiskey diet. I’ve lost three days already. – Anonymous",
    // 99
    "Why did the scarecrow win an award? Because he was outstanding in his field. – Anonymous",
    // 100
    "I would agree with you, but then we’d both be wrong. – Russell Lynes"
    ],

    "Philosophical Quotes": [
    // 1
    "The unexamined life is not worth living. – Socrates",
    // 2
    "I think, therefore I am. – René Descartes",
    // 3
    "The only thing I know is that I know nothing. – Socrates",
    // 4
    "To be, or not to be: that is the question. – William Shakespeare",
    // 5
    "The greatest wealth is to live content with little. – Plato",
    // 6
    "Happiness depends upon ourselves. – Aristotle",
    // 7
    "The only true wisdom is in knowing you know nothing. – Socrates",
    // 8
    "The mind is everything. What you think you become. – Buddha",
    // 9
    "Life is really simple, but we insist on making it complicated. – Confucius",
    // 10
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    // 11
    "In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost",
    // 12
    "He who has a why to live can bear almost any how. – Friedrich Nietzsche",
    // 13
    "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. – Albert Camus",
    // 14
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 15
    "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does. – Jean-Paul Sartre",
    // 16
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 17
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 18
    "The best way to predict your future is to create it. – Peter Drucker",
    // 19
    "I am not what happened to me, I am what I choose to become. – Carl Jung",
    // 20
    "You only live once, but if you do it right, once is enough. – Mae West",
    // 21
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    // 22
    "What we achieve inwardly will change outer reality. – Plutarch",
    // 23
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle",
    // 24
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    // 25
    "Everything has beauty, but not everyone can see. – Confucius",
    // 26
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    // 27
    "Life is what happens when you’re busy making other plans. – John Lennon",
    // 28
    "We do not remember days; we remember moments. – Cesare Pavese",
    // 29
    "Life isn’t about waiting for the storm to pass, it’s about learning how to dance in the rain. – Vivian Greene",
    // 30
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 31
    "The only true wisdom is knowing you know nothing. – Socrates",
    // 32
    "Act as if what you do makes a difference. It does. – William James",
    // 33
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    // 34
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    // 35
    "The good life is one inspired by love and guided by knowledge. – Bertrand Russell",
    // 36
    "Life isn’t about finding yourself. Life is about creating yourself. – George Bernard Shaw",
    // 37
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    // 38
    "We live only a few conscious decades, and we fret ourselves enough for several lifetimes. – Christopher Hitchens",
    // 39
    "The only way to have a friend is to be one. – Ralph Waldo Emerson",
    // 40
    "Man is the measure of all things. – Protagoras",
    // 41
    "To love and be loved is to feel the sun from both sides. – David Viscott",
    // 42
    "The world is full of magical things patiently waiting for our wits to grow sharper. – Bertrand Russell",
    // 43
    "He who has a why to live can bear almost any how. – Friedrich Nietzsche",
    // 44
    "Life is a succession of lessons which must be lived to be understood. – Helen Keller",
    // 45
    "The more I read, the more I acquire, the more certain I am that I know nothing. – Voltaire",
    // 46
    "The journey of a thousand miles begins with a single step. – Lao Tzu",
    // 47
    "Man is born free, and everywhere he is in chains. – Jean-Jacques Rousseau",
    // 48
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    // 49
    "We must be our own before we can be another’s. – Ralph Waldo Emerson",
    // 50
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 51
    "The greatest wealth is to live content with little. – Plato",
    // 52
    "Happiness depends upon ourselves. – Aristotle",
    // 53
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    // 54
    "The mind is everything. What you think you become. – Buddha",
    // 55
    "I think, therefore I am. – René Descartes",
    // 56
    "The only thing I know is that I know nothing. – Socrates",
    // 57
    "Life is really simple, but we insist on making it complicated. – Confucius",
    // 58
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 59
    "To be, or not to be: that is the question. – William Shakespeare",
    // 60
    "He who has a why to live can bear almost any how. – Friedrich Nietzsche",
    // 61
    "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. – Albert Camus",
    // 62
    "The greatest wealth is to live content with little. – Plato",
    // 63
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle",
    // 64
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 65
    "The best way to predict your future is to create it. – Peter Drucker",
    // 66
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    // 67
    "The only true wisdom is knowing you know nothing. – Socrates",
    // 68
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    // 69
    "We do not remember days; we remember moments. – Cesare Pavese",
    // 70
    "The good life is one inspired by love and guided by knowledge. – Bertrand Russell",
    // 71
    "Life isn’t about waiting for the storm to pass, it’s about learning how to dance in the rain. – Vivian Greene",
    // 72
    "The more I read, the more I acquire, the more certain I am that I know nothing. – Voltaire",
    // 73
    "We must be our own before we can be another’s. – Ralph Waldo Emerson",
    // 74
    "The mind is everything. What you think you become. – Buddha",
    // 75
    "The only true wisdom is knowing you know nothing. – Socrates",
    // 76
    "Man is the measure of all things. – Protagoras",
    // 77
    "To love and be loved is to feel the sun from both sides. – David Viscott",
    // 78
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    // 79
    "Happiness depends upon ourselves. – Aristotle",
    // 80
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    // 81
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 82
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle",
    // 83
    "To be, or not to be: that is the question. – William Shakespeare",
    // 84
    "Man is born free, and everywhere he is in chains. – Jean-Jacques Rousseau",
    // 85
    "The only thing I know is that I know nothing. – Socrates",
    // 86
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    // 87
    "The world is full of magical things patiently waiting for our wits to grow sharper. – Bertrand Russell",
    // 88
    "Life is a succession of lessons which must be lived to be understood. – Helen Keller",
    // 89
    "The greatest wealth is to live content with little. – Plato",
    // 90
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 91
    "The best way to predict your future is to create it. – Peter Drucker",
    // 92
    "The mind is everything. What you think you become. – Buddha",
    // 93
    "We do not remember days; we remember moments. – Cesare Pavese",
    // 94
    "The only true wisdom is knowing you know nothing. – Socrates",
    // 95
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    // 96
    "The more I read, the more I acquire, the more certain I am that I know nothing. – Voltaire",
    // 97
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    // 98
    "Man is the measure of all things. – Protagoras",
    // 99
    "The good life is one inspired by love and guided by knowledge. – Bertrand Russell",
    // 100
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis"
    ],

    "Motivational Quotes": [
    // 1
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 2
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    // 3
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    // 4
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    // 5
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    // 6
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    // 7
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 8
    "Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along. – Napoleon Hill",
    // 9
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 10
    "The best way to predict the future is to create it. – Peter Drucker",
    // 11
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    // 12
    "The harder you work for something, the greater you’ll feel when you achieve it. – Anonymous",
    // 13
    "Dream it. Believe it. Build it. – Anonymous",
    // 14
    "Opportunities don't happen. You create them. – Chris Grosser",
    // 15
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    // 16
    "You are not your resume, you are your work. – Seth Godin",
    // 17
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    // 18
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 19
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    // 20
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    // 21
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 22
    "The secret of getting ahead is getting started. – Mark Twain",
    // 23
    "Your limitation—it's only your imagination. – Anonymous",
    // 24
    "Push yourself, because no one else is going to do it for you. – Anonymous",
    // 25
    "Great things never come from comfort zones. – Anonymous",
    // 26
    "Dream it. Wish it. Do it. – Anonymous",
    // 27
    "Success doesn’t just find you. You have to go out and get it. – Anonymous",
    // 28
    "The harder you work, the more benefits you will receive. – Anonymous",
    // 29
    "Dream bigger. Do bigger. – Anonymous",
    // 30
    "Don’t stop when you’re tired. Stop when you’re done. – Anonymous",
    // 31
    "Wake up with determination. Go to bed with satisfaction. – Anonymous",
    // 32
    "Do something today that your future self will thank you for. – Anonymous",
    // 33
    "Little things make big days. – Anonymous",
    // 34
    "It’s going to be hard, but hard does not mean impossible. – Anonymous",
    // 35
    "Don’t wait for opportunity. Create it. – Anonymous",
    // 36
    "The harder you work, the luckier you get. – Anonymous",
    // 37
    "Dream it. Believe it. Build it. – Anonymous",
    // 38
    "Success is not for the chosen few, but for the few who choose it. – Anonymous",
    // 39
    "Great things never come from comfort zones. – Anonymous",
    // 40
    "Dream bigger. Do bigger. – Anonymous",
    // 41
    "If you get tired, learn to rest, not to quit. – Anonymous",
    // 42
    "Wake up with determination. Go to bed with satisfaction. – Anonymous",
    // 43
    "The key to success is to focus on goals, not obstacles. – Anonymous",
    // 44
    "Dream it. Wish it. Do it. – Anonymous",
    // 45
    "Success doesn’t just find you. You have to go out and get it. – Anonymous",
    // 46
    "The only limit to your impact is your imagination and commitment. – Anonymous",
    // 47
    "Dream bigger. Do bigger. – Anonymous",
    // 48
    "Don’t stop when you’re tired. Stop when you’re done. – Anonymous",
    // 49
    "Wake up with determination. Go to bed with satisfaction. – Anonymous",
    // 50
    "Do something today that your future self will thank you for. – Anonymous",
    // 51
    "Little things make big days. – Anonymous",
    // 52
    "It’s going to be hard, but hard does not mean impossible. – Anonymous",
    // 53
    "Don’t wait for opportunity. Create it. – Anonymous",
    // 54
    "The harder you work, the luckier you get. – Anonymous",
    // 55
    "Dream it. Believe it. Build it. – Anonymous",
    // 56
    "Success is not for the chosen few, but for the few who choose it. – Anonymous",
    // 57
    "Great things never come from comfort zones. – Anonymous",
    // 58
    "Dream bigger. Do bigger. – Anonymous",
    // 59
    "If you get tired, learn to rest, not to quit. – Anonymous",
    // 60
    "Wake up with determination. Go to bed with satisfaction. – Anonymous",
    // 61
    "The key to success is to focus on goals, not obstacles. – Anonymous",
    // 62
    "Dream it. Wish it. Do it. – Anonymous",
    // 63
    "Success doesn’t just find you. You have to go out and get it. – Anonymous",
    // 64
    "The only limit to your impact is your imagination and commitment. – Anonymous",
    // 65
    "Dream bigger. Do bigger. – Anonymous",
    // 66
    "Don’t stop when you’re tired. Stop when you’re done. – Anonymous",
    // 67
    "Wake up with determination. Go to bed with satisfaction. – Anonymous",
    // 68
    "Do something today that your future self will thank you for. – Anonymous",
    // 69
    "Little things make big days. – Anonymous",
    // 70
    "It’s going to be hard, but hard does not mean impossible. – Anonymous",
    // 71
    "Don’t wait for opportunity. Create it. – Anonymous",
    // 72
    "The harder you work, the luckier you get. – Anonymous",
    // 73
    "Dream it. Believe it. Build it. – Anonymous",
    // 74
    "Success is not for the chosen few, but for the few who choose it. – Anonymous",
    // 75
    "Great things never come from comfort zones. – Anonymous",
    // 76
    "Dream bigger. Do bigger. – Anonymous",
    // 77
    "If you get tired, learn to rest, not to quit. – Anonymous",
    // 78
    "Wake up with determination. Go to bed with satisfaction. – Anonymous",
    // 79
    "The key to success is to focus on goals, not obstacles. – Anonymous",
    // 80
    "Dream it. Wish it. Do it. – Anonymous",
    // 81
    "Success doesn’t just find you. You have to go out and get it. – Anonymous",
    // 82
    "The only limit to your impact is your imagination and commitment. – Anonymous",
    // 83
    "Dream bigger. Do bigger. – Anonymous",
    // 84
    "Don’t stop when you’re tired. Stop when you’re done. – Anonymous",
    // 85
    "Wake up with determination. Go to bed with satisfaction. – Anonymous",
    // 86
    "Do something today that your future self will thank you for. – Anonymous",
    // 87
    "Little things make big days. – Anonymous",
    // 88
    "It’s going to be hard, but hard does not mean impossible. – Anonymous",
    // 89
    "Don’t wait for opportunity. Create it. – Anonymous",
    // 90
    "The harder you work, the luckier you get. – Anonymous",
    // 91
    "Dream it. Believe it. Build it. – Anonymous",
    // 92
    "Success is not for the chosen few, but for the few who choose it. – Anonymous",
    // 93
    "Great things never come from comfort zones. – Anonymous",
    // 94
    "Dream bigger. Do bigger. – Anonymous",
    // 95
    "If you get tired, learn to rest, not to quit. – Anonymous",
    // 96
    "Wake up with determination. Go to bed with satisfaction. – Anonymous",
    // 97
    "The key to success is to focus on goals, not obstacles. – Anonymous",
    // 98
    "Dream it. Wish it. Do it. – Anonymous",
    // 99
    "Success doesn’t just find you. You have to go out and get it. – Anonymous",
    // 100
    "The only limit to your impact is your imagination and commitment. – Anonymous"
    ],

    "Success Quotes": [
    // 1
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    // 2
    "The only place where success comes before work is in the dictionary. – Vidal Sassoon",
    // 3
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    // 4
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    // 5
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    // 6
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    // 7
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    // 8
    "The secret of success is to do the common thing uncommonly well. – John D. Rockefeller Jr.",
    // 9
    "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
    // 10
    "Success does not consist in never making mistakes but in never making the same one a second time. – George Bernard Shaw",
    // 11
    "Opportunities don't happen. You create them. – Chris Grosser",
    // 12
    "Success is how high you bounce when you hit bottom. – George S. Patton",
    // 13
    "To be successful, you must accept all challenges that come your way. You can't just accept the ones you like. – Mike Gafka",
    // 14
    "Success is not measured by what you accomplish, but the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds. – Orison Swett Marden",
    // 15
    "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. – Vince Lombardi",
    // 16
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    // 17
    "The key to success is to focus on goals, not obstacles. – Anonymous",
    // 18
    "Success is not in what you have, but who you are. – Bo Bennett",
    // 19
    "Success comes from having a clear vision, planning, and taking action to make it happen. – Anonymous",
    // 20
    "Success is not for the chosen few, but for the few who choose it. – Anonymous",
    // 21
    "The best revenge is massive success. – Frank Sinatra",
    // 22
    "Success is not the absence of failure; it’s the persistence through failure. – Aisha Tyler",
    // 23
    "Success is the result of preparation, hard work, and learning from failure. – Colin Powell",
    // 24
    "Success isn’t just about what you accomplish in your life, it’s about what you inspire others to do. – Anonymous",
    // 25
    "Success is about creating value and making a difference. – Anonymous",
    // 26
    "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome. – Booker T. Washington",
    // 27
    "Success is a journey, not a destination. – Arthur Ashe",
    // 28
    "Success is not about how high you have climbed, but how you make a positive difference to the world. – Anonymous",
    // 29
    "Success is doing ordinary things extraordinarily well. – Jim Rohn",
    // 30
    "Success is going from failure to failure without losing your enthusiasm. – Winston Churchill",
    // 31
    "Success is about making an impact, not making an income. – Kevin Kruse",
    // 32
    "Success is the ability to go from one failure to another with no loss of enthusiasm. – Winston Churchill",
    // 33
    "Success is not in what you have, but who you are. – Bo Bennett",
    // 34
    "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome. – Booker T. Washington",
    // 35
    "Success is a journey, not a destination. – Arthur Ashe",
    // 36
    "Success is not about how high you have climbed, but how you make a positive difference to the world. – Anonymous",
    // 37
    "Success is doing ordinary things extraordinarily well. – Jim Rohn",
    // 38
    "Success is about creating value and making a difference. – Anonymous",
    // 39
    "Success isn’t just about what you accomplish in your life, it’s about what you inspire others to do. – Anonymous",
    // 40
    "Success is the result of preparation, hard work, and learning from failure. – Colin Powell",
    // 41
    "Success is not the absence of failure; it’s the persistence through failure. – Aisha Tyler",
    // 42
    "The best revenge is massive success. – Frank Sinatra",
    // 43
    "The key to success is to focus on goals, not obstacles. – Anonymous",
    // 44
    "Success is not in what you have, but who you are. – Bo Bennett",
    // 45
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    // 46
    "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. – Vince Lombardi",
    // 47
    "Success is not measured by what you accomplish, but the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds. – Orison Swett Marden",
    // 48
    "To be successful, you must accept all challenges that come your way. You can't just accept the ones you like. – Mike Gafka",
    // 49
    "Success is the result of preparation, hard work, and learning from failure. – Colin Powell",
    // 50
    "Success is how high you bounce when you hit bottom. – George S. Patton",
    // 51
    "Opportunities don't happen. You create them. – Chris Grosser",
    // 52
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    // 53
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    // 54
    "The secret of success is to do the common thing uncommonly well. – John D. Rockefeller Jr.",
    // 55
    "The road to success and the road to failure are almost exactly the same. – Colin R. Davis",
    // 56
    "Success does not consist in never making mistakes but in never making the same one a second time. – George Bernard Shaw",
    // 57
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    // 58
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    // 59
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    // 60
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    // 61
    "Success is not for the chosen few, but for the few who choose it. – Anonymous",
    // 62
    "Success is about creating value and making a difference. – Anonymous",
    // 63
    "Success is not measured by what you accomplish, but the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds. – Orison Swett Marden",
    // 64
    "Success is a journey, not a destination. – Arthur Ashe",
    // 65
    "Success is not about how high you have climbed, but how you make a positive difference to the world. – Anonymous",
    // 66
    "Success is doing ordinary things extraordinarily well. – Jim Rohn",
    // 67
    "Success is about creating value and making a difference. – Anonymous",
    // 68
    "Success is not in what you have, but who you are. – Bo Bennett",
    // 69
    "Success is the result of preparation, hard work, and learning from failure. – Colin Powell",
    // 70
    "Success isn’t just about what you accomplish in your life, it’s about what you inspire others to do. – Anonymous",
    // 71
    "Success is not the absence of failure; it’s the persistence through failure. – Aisha Tyler",
    // 72
    "The best revenge is massive success. – Frank Sinatra",
    // 73
    "The key to success is to focus on goals, not obstacles. – Anonymous",
    // 74
    "Success is not the absence of failure; it’s the persistence through failure. – Aisha Tyler",
    // 75
    "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome. – Booker T. Washington",
    // 76
    "Success is a journey, not a destination. – Arthur Ashe",
    // 77
    "Success is not about how high you have climbed, but how you make a positive difference to the world. – Anonymous",
    // 78
    "Success is doing ordinary things extraordinarily well. – Jim Rohn",
    // 79
    "Success is about creating value and making a difference. – Anonymous",
    // 80
    "Success isn’t just about what you accomplish in your life, it’s about what you inspire others to do. – Anonymous",
    // 81
    "Success is the result of preparation, hard work, and learning from failure. – Colin Powell",
    // 82
    "Success is not in what you have, but who you are. – Bo Bennett",
    // 83
    "Success is how high you bounce when you hit bottom. – George S. Patton",
    // 84
    "Opportunities don't happen. You create them. – Chris Grosser",
    // 85
    "Success is walking from failure to failure with no loss of enthusiasm. – Winston Churchill",
    // 86
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    // 87
    "The secret of success is to do the common thing uncommonly well. – John D. Rockefeller Jr.",
    // 88
    "Success does not consist in never making mistakes but in never making the same one a second time. – George Bernard Shaw",
    // 89
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    // 90
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    // 91
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    // 92
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    // 93
    "Success is not for the chosen few, but for the few who choose it. – Anonymous",
    // 94
    "Success is about creating value and making a difference. – Anonymous",
    // 95
    "Success is not measured by what you accomplish, but the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds. – Orison Swett Marden",
    // 96
    "Success is a journey, not a destination. – Arthur Ashe",
    // 97
    "Success is not about how high you have climbed, but how you make a positive difference to the world. – Anonymous",
    // 98
    "Success is doing ordinary things extraordinarily well. – Jim Rohn",
    // 99
    "Success is about creating value and making a difference. – Anonymous",
    // 100
    "The key to success is to focus on goals, not obstacles. – Anonymous"
    ],

    "Wisdom Quotes": [
    // 1
    "The only true wisdom is in knowing you know nothing. – Socrates",
    // 2
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. – Albert Einstein",
    // 3
    "The wise man does at once what the fool does finally. – Niccolò Machiavelli",
    // 4
    "Knowledge speaks, but wisdom listens. – Jimi Hendrix",
    // 5
    "Wisdom begins in wonder. – Socrates",
    // 6
    "The older I grow, the more I realize the importance of choosing the right attitude. – Charles R. Swindoll",
    // 7
    "Wisdom is the reward you get for a lifetime of listening when you’d have preferred to talk. – Doug Larson",
    // 8
    "Wisdom is the power to put our time and our knowledge to the proper use. – Thomas J. Watson",
    // 9
    "In seeking wisdom, the first step is silence, the second step is listening. – Anonymous",
    // 10
    "Wisdom is the daughter of experience. – Leonardo da Vinci",
    // 11
    "The only real wisdom is knowing how to live. – Jean-Jacques Rousseau",
    // 12
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. – Albert Einstein",
    // 13
    "The greatest wisdom is in knowing that we know nothing. – Socrates",
    // 14
    "Wisdom is the quality that keeps you from getting into situations where you need it. – Doug Larson",
    // 15
    "The best way to predict the future is to invent it. – Alan Kay",
    // 16
    "The only true wisdom is in knowing you know nothing. – Socrates",
    // 17
    "Wisdom is knowing what to do next; virtue is doing it. – David Starr Jordan",
    // 18
    "The wise man does at once what the fool does finally. – Niccolò Machiavelli",
    // 19
    "Knowledge speaks, but wisdom listens. – Jimi Hendrix",
    // 20
    "Wisdom begins in wonder. – Socrates",
    // 21
    "The older I grow, the more I realize the importance of choosing the right attitude. – Charles R. Swindoll",
    // 22
    "Wisdom is the reward you get for a lifetime of listening when you’d have preferred to talk. – Doug Larson",
    // 23
    "Wisdom is the power to put our time and our knowledge to the proper use. – Thomas J. Watson",
    // 24
    "In seeking wisdom, the first step is silence, the second step is listening. – Anonymous",
    // 25
    "Wisdom is the daughter of experience. – Leonardo da Vinci",
    // 26
    "The only real wisdom is knowing how to live. – Jean-Jacques Rousseau",
    // 27
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. – Albert Einstein",
    // 28
    "The greatest wisdom is in knowing that we know nothing. – Socrates",
    // 29
    "Wisdom is the quality that keeps you from getting into situations where you need it. – Doug Larson",
    // 30
    "The best way to predict the future is to invent it. – Alan Kay",
    // 31
    "The only true wisdom is in knowing you know nothing. – Socrates",
    // 32
    "Wisdom is knowing what to do next; virtue is doing it. – David Starr Jordan",
    // 33
    "The wise man does at once what the fool does finally. – Niccolò Machiavelli",
    // 34
    "Knowledge speaks, but wisdom listens. – Jimi Hendrix",
    // 35
    "Wisdom begins in wonder. – Socrates",
    // 36
    "The older I grow, the more I realize the importance of choosing the right attitude. – Charles R. Swindoll",
    // 37
    "Wisdom is the reward you get for a lifetime of listening when you’d have preferred to talk. – Doug Larson",
    // 38
    "Wisdom is the power to put our time and our knowledge to the proper use. – Thomas J. Watson",
    // 39
    "In seeking wisdom, the first step is silence, the second step is listening. – Anonymous",
    // 40
    "Wisdom is the daughter of experience. – Leonardo da Vinci",
    // 41
    "The only real wisdom is knowing how to live. – Jean-Jacques Rousseau",
    // 42
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. – Albert Einstein",
    // 43
    "The greatest wisdom is in knowing that we know nothing. – Socrates",
    // 44
    "Wisdom is the quality that keeps you from getting into situations where you need it. – Doug Larson",
    // 45
    "The best way to predict the future is to invent it. – Alan Kay",
    // 46
    "The only true wisdom is in knowing you know nothing. – Socrates",
    // 47
    "Wisdom is knowing what to do next; virtue is doing it. – David Starr Jordan",
    // 48
    "The wise man does at once what the fool does finally. – Niccolò Machiavelli",
    // 49
    "Knowledge speaks, but wisdom listens. – Jimi Hendrix",
    // 50
    "Wisdom begins in wonder. – Socrates",
    // 51
    "The older I grow, the more I realize the importance of choosing the right attitude. – Charles R. Swindoll",
    // 52
    "Wisdom is the reward you get for a lifetime of listening when you’d have preferred to talk. – Doug Larson",
    // 53
    "Wisdom is the power to put our time and our knowledge to the proper use. – Thomas J. Watson",
    // 54
    "In seeking wisdom, the first step is silence, the second step is listening. – Anonymous",
    // 55
    "Wisdom is the daughter of experience. – Leonardo da Vinci",
    // 56
    "The only real wisdom is knowing how to live. – Jean-Jacques Rousseau",
    // 57
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. – Albert Einstein",
    // 58
    "The greatest wisdom is in knowing that we know nothing. – Socrates",
    // 59
    "Wisdom is the quality that keeps you from getting into situations where you need it. – Doug Larson",
    // 60
    "The best way to predict the future is to invent it. – Alan Kay",
    // 61
    "The only true wisdom is in knowing you know nothing. – Socrates",
    // 62
    "Wisdom is knowing what to do next; virtue is doing it. – David Starr Jordan",
    // 63
    "The wise man does at once what the fool does finally. – Niccolò Machiavelli",
    // 64
    "Knowledge speaks, but wisdom listens. – Jimi Hendrix",
    // 65
    "Wisdom begins in wonder. – Socrates",
    // 66
    "The older I grow, the more I realize the importance of choosing the right attitude. – Charles R. Swindoll",
    // 67
    "Wisdom is the reward you get for a lifetime of listening when you’d have preferred to talk. – Doug Larson",
    // 68
    "Wisdom is the power to put our time and our knowledge to the proper use. – Thomas J. Watson",
    // 69
    "In seeking wisdom, the first step is silence, the second step is listening. – Anonymous",
    // 70
    "Wisdom is the daughter of experience. – Leonardo da Vinci",
    // 71
    "The only real wisdom is knowing how to live. – Jean-Jacques Rousseau",
    // 72
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. – Albert Einstein",
    // 73
    "The greatest wisdom is in knowing that we know nothing. – Socrates",
    // 74
    "Wisdom is the quality that keeps you from getting into situations where you need it. – Doug Larson",
    // 75
    "The best way to predict the future is to invent it. – Alan Kay",
    // 76
    "The only true wisdom is in knowing you know nothing. – Socrates",
    // 77
    "Wisdom is knowing what to do next; virtue is doing it. – David Starr Jordan",
    // 78
    "The wise man does at once what the fool does finally. – Niccolò Machiavelli",
    // 79
    "Knowledge speaks, but wisdom listens. – Jimi Hendrix",
    // 80
    "Wisdom begins in wonder. – Socrates",
    // 81
    "The older I grow, the more I realize the importance of choosing the right attitude. – Charles R. Swindoll",
    // 82
    "Wisdom is the reward you get for a lifetime of listening when you’d have preferred to talk. – Doug Larson",
    // 83
    "Wisdom is the power to put our time and our knowledge to the proper use. – Thomas J. Watson",
    // 84
    "In seeking wisdom, the first step is silence, the second step is listening. – Anonymous",
    // 85
    "Wisdom is the daughter of experience. – Leonardo da Vinci",
    // 86
    "The only real wisdom is knowing how to live. – Jean-Jacques Rousseau",
    // 87
    "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. – Albert Einstein",
    // 88
    "The greatest wisdom is in knowing that we know nothing. – Socrates",
    // 89
    "Wisdom is the quality that keeps you from getting into situations where you need it. – Doug Larson",
    // 90
    "The best way to predict the future is to invent it. – Alan Kay",
    // 91
    "The only true wisdom is in knowing you know nothing. – Socrates",
    // 92
    "Wisdom is knowing what to do next; virtue is doing it. – David Starr Jordan",
    // 93
    "The wise man does at once what the fool does finally. – Niccolò Machiavelli",
    // 94
    "Knowledge speaks, but wisdom listens. – Jimi Hendrix",
    // 95
    "Wisdom begins in wonder. – Socrates",
    // 96
    "The older I grow, the more I realize the importance of choosing the right attitude. – Charles R. Swindoll",
    // 97
    "Wisdom is the reward you get for a lifetime of listening when you’d have preferred to talk. – Doug Larson",
    // 98
    "Wisdom is the power to put our time and our knowledge to the proper use. – Thomas J. Watson",
    // 99
    "In seeking wisdom, the first step is silence, the second step is listening. – Anonymous",
    // 100
    "Wisdom is the daughter of experience. – Leonardo da Vinci"
    ],

    "Sad Quotes": [
    // 1
    "The greater your storm, the brighter your rainbow. – Anonymous",
    // 2
    "The hardest part about walking away from you is knowing that you’ll never come running back. – Anonymous",
    // 3
    "Tears are words the heart can’t express. – Anonymous",
    // 4
    "Sometimes you have to let go to see if there was anything worth holding on to. – Anonymous",
    // 5
    "It’s sad when someone you know becomes someone you knew. – Anonymous",
    // 6
    "The pain of parting is nothing to the joy of meeting again. – Charles Dickens",
    // 7
    "Behind every smile, there is a story of pain. – Anonymous",
    // 8
    "Some people are meant to fall in love with each other, but not meant to be together. – Anonymous",
    // 9
    "You can’t force someone to love you. All you can do is be someone who can be loved. – Anonymous",
    // 10
    "Every heart has a pain. Only the way of expressing it is different. – Anonymous",
    // 11
    "It’s hard to forget someone who gave you so much to remember. – Anonymous",
    // 12
    "The worst kind of pain is when you’re smiling just to stop the tears from falling. – Anonymous",
    // 13
    "Sometimes you have to give up on people, not because you don’t care but because they don’t. – Anonymous",
    // 14
    "It’s okay to be sad. It’s okay to cry. It’s okay to feel. – Anonymous",
    // 15
    "Somewhere, someone is thinking of you. Someone is caring about you. – Anonymous",
    // 16
    "The greatest pain that comes from love is loving someone you can never have. – Anonymous",
    // 17
    "When you are happy, you enjoy the music. But when you are sad, you understand the lyrics. – Anonymous",
    // 18
    "Sometimes, you have to let go of the picture you had in your head of how things were supposed to be. – Anonymous",
    // 19
    "Not everyone you lose is a loss. – Anonymous",
    // 20
    "The hardest part of loving someone is watching them love someone else. – Anonymous",
    // 21
    "Sadness flies away on the wings of time. – Jean de La Fontaine",
    // 22
    "You cannot protect yourself from sadness without protecting yourself from happiness. – Jonathan Safran Foer",
    // 23
    "The pain of yesterday is the strength of today. – Anonymous",
    // 24
    "The most painful goodbyes are the ones that are never said and never explained. – Anonymous",
    // 25
    "Sometimes you have to take a step back to see how far you’ve come. – Anonymous",
    // 26
    "You don’t realize how much you miss someone until they’re gone. – Anonymous",
    // 27
    "Life is not always sunshine and butterflies. Sometimes you have to learn to dance in the rain. – Anonymous",
    // 28
    "The sad thing about betrayal is that it never comes from your enemies. – Anonymous",
    // 29
    "Tears are the silent language of grief. – William Shakespeare",
    // 30
    "The greatest griefs are those we cause ourselves. – Anonymous",
    // 31
    "The only thing more painful than being alone is being with someone who makes you feel alone. – Anonymous",
    // 32
    "Sometimes the one who loves you is the one who hurts you the most. – Anonymous",
    // 33
    "A broken heart is not the end of the world. It is the beginning of a new chapter. – Anonymous",
    // 34
    "We are all broken, that’s how the light gets in. – Ernest Hemingway",
    // 35
    "It’s hard to forget someone who gave you so much to remember. – Anonymous",
    // 36
    "The hardest thing about moving forward is not looking back. – Anonymous",
    // 37
    "It’s okay to be sad and to let it show. – Anonymous",
    // 38
    "The scars you can’t see are the hardest to heal. – Anonymous",
    // 39
    "There is no greater sorrow than to recall in misery the time when we were happy. – Dante Alighieri",
    // 40
    "Don’t cry because it’s over, smile because it happened. – Dr. Seuss",
    // 41
    "The saddest thing about betrayal is that it never comes from your enemies. – Anonymous",
    // 42
    "Sometimes you have to let go to see if there was anything worth holding on to. – Anonymous",
    // 43
    "The greater your storm, the brighter your rainbow. – Anonymous",
    // 44
    "The pain of parting is nothing to the joy of meeting again. – Charles Dickens",
    // 45
    "Behind every smile, there is a story of pain. – Anonymous",
    // 46
    "You can’t force someone to love you. All you can do is be someone who can be loved. – Anonymous",
    // 47
    "Every heart has a pain. Only the way of expressing it is different. – Anonymous",
    // 48
    "It’s hard to forget someone who gave you so much to remember. – Anonymous",
    // 49
    "The worst kind of pain is when you’re smiling just to stop the tears from falling. – Anonymous",
    // 50
    "Sometimes you have to give up on people, not because you don’t care but because they don’t. – Anonymous",
    // 51
    "It’s okay to be sad. It’s okay to cry. It’s okay to feel. – Anonymous",
    // 52
    "Somewhere, someone is thinking of you. Someone is caring about you. – Anonymous",
    // 53
    "The greatest pain that comes from love is loving someone you can never have. – Anonymous",
    // 54
    "When you are happy, you enjoy the music. But when you are sad, you understand the lyrics. – Anonymous",
    // 55
    "Sometimes, you have to let go of the picture you had in your head of how things were supposed to be. – Anonymous",
    // 56
    "Not everyone you lose is a loss. – Anonymous",
    // 57
    "The hardest part of loving someone is watching them love someone else. – Anonymous",
    // 58
    "Sadness flies away on the wings of time. – Jean de La Fontaine",
    // 59
    "You cannot protect yourself from sadness without protecting yourself from happiness. – Jonathan Safran Foer",
    // 60
    "The pain of yesterday is the strength of today. – Anonymous",
    // 61
    "The most painful goodbyes are the ones that are never said and never explained. – Anonymous",
    // 62
    "Sometimes you have to take a step back to see how far you’ve come. – Anonymous",
    // 63
    "You don’t realize how much you miss someone until they’re gone. – Anonymous",
    // 64
    "Life is not always sunshine and butterflies. Sometimes you have to learn to dance in the rain. – Anonymous",
    // 65
    "The sad thing about betrayal is that it never comes from your enemies. – Anonymous",
    // 66
    "Tears are the silent language of grief. – William Shakespeare",
    // 67
    "The greatest griefs are those we cause ourselves. – Anonymous",
    // 68
    "The only thing more painful than being alone is being with someone who makes you feel alone. – Anonymous",
    // 69
    "Sometimes the one who loves you is the one who hurts you the most. – Anonymous",
    // 70
    "A broken heart is not the end of the world. It is the beginning of a new chapter. – Anonymous",
    // 71
    "We are all broken, that’s how the light gets in. – Ernest Hemingway",
    // 72
    "It’s hard to forget someone who gave you so much to remember. – Anonymous",
    // 73
    "The hardest thing about moving forward is not looking back. – Anonymous",
    // 74
    "It’s okay to be sad and to let it show. – Anonymous",
    // 75
    "The scars you can’t see are the hardest to heal. – Anonymous",
    // 76
    "There is no greater sorrow than to recall in misery the time when we were happy. – Dante Alighieri",
    // 77
    "Don’t cry because it’s over, smile because it happened. – Dr. Seuss",
    // 78
    "The saddest thing about betrayal is that it never comes from your enemies. – Anonymous",
    // 79
    "Sometimes you have to let go to see if there was anything worth holding on to. – Anonymous",
    // 80
    "The greater your storm, the brighter your rainbow. – Anonymous",
    // 81
    "The pain of parting is nothing to the joy of meeting again. – Charles Dickens",
    // 82
    "Behind every smile, there is a story of pain. – Anonymous",
    // 83
    "You can’t force someone to love you. All you can do is be someone who can be loved. – Anonymous",
    // 84
    "Every heart has a pain. Only the way of expressing it is different. – Anonymous",
    // 85
    "It’s hard to forget someone who gave you so much to remember. – Anonymous",
    // 86
    "The worst kind of pain is when you’re smiling just to stop the tears from falling. – Anonymous",
    // 87
    "Sometimes you have to give up on people, not because you don’t care but because they don’t. – Anonymous",
    // 88
    "It’s okay to be sad. It’s okay to cry. It’s okay to feel. – Anonymous",
    // 89
    "Somewhere, someone is thinking of you. Someone is caring about you. – Anonymous",
    // 90
    "The greatest pain that comes from love is loving someone you can never have. – Anonymous",
    // 91
    "When you are happy, you enjoy the music. But when you are sad, you understand the lyrics. – Anonymous",
    // 92
    "Sometimes, you have to let go of the picture you had in your head of how things were supposed to be. – Anonymous",
    // 93
    "Not everyone you lose is a loss. – Anonymous",
    // 94
    "The hardest part of loving someone is watching them love someone else. – Anonymous",
    // 95
    "Sadness flies away on the wings of time. – Jean de La Fontaine",
    // 96
    "You cannot protect yourself from sadness without protecting yourself from happiness. – Jonathan Safran Foer",
    // 97
    "The pain of yesterday is the strength of today. – Anonymous",
    // 98
    "The most painful goodbyes are the ones that are never said and never explained. – Anonymous",
    // 99
    "Sometimes you have to take a step back to see how far you’ve come. – Anonymous",
    // 100
    "You don’t realize how much you miss someone until they’re gone. – Anonymous"
    ],

    "Positive Quotes": [
    // 1
    "The only way to do great work is to love what you do. – Steve Jobs",
    // 2
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    // 3
    "The best way to predict the future is to create it. – Peter Drucker",
    // 4
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    // 5
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 6
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 7
    "Act as if what you do makes a difference. It does. – William James",
    // 8
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 9
    "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
    // 10
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 11
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    // 12
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    // 13
    "You do not find the happy life. You make it. – Camilla E. Kimball",
    // 14
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 15
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 16
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 17
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 18
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    // 19
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    // 20
    "We may encounter many defeats but we must not be defeated. – Maya Angelou",
    // 21
    "The only way to do great work is to love what you do. – Steve Jobs",
    // 22
    "Positive anything is better than negative nothing. – Elbert Hubbard",
    // 23
    "You must do the things you think you cannot do. – Eleanor Roosevelt",
    // 24
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    // 25
    "In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost",
    // 26
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 27
    "You can’t go back and change the beginning, but you can start where you are and change the ending. – C.S. Lewis",
    // 28
    "Happiness depends upon ourselves. – Aristotle",
    // 29
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    // 30
    "The only impossible journey is the one you never begin. – Tony Robbins",
    // 31
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    // 32
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    // 33
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 34
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 35
    "Opportunities don't happen. You create them. – Chris Grosser",
    // 36
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    // 37
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 38
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 39
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    // 40
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 41
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    // 42
    "Act as if what you do makes a difference. It does. – William James",
    // 43
    "You do not find the happy life. You make it. – Camilla E. Kimball",
    // 44
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 45
    "The best way to predict the future is to create it. – Peter Drucker",
    // 46
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    // 47
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 48
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 49
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    // 50
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    // 51
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 52
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    // 53
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 54
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    // 55
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 56
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 57
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 58
    "Opportunities don't happen. You create them. – Chris Grosser",
    // 59
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    // 60
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    // 61
    "You can’t go back and change the beginning, but you can start where you are and change the ending. – C.S. Lewis",
    // 62
    "The only way to do great work is to love what you do. – Steve Jobs",
    // 63
    "Happiness depends upon ourselves. – Aristotle",
    // 64
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    // 65
    "The only impossible journey is the one you never begin. – Tony Robbins",
    // 66
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    // 67
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 68
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 69
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    // 70
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 71
    "Act as if what you do makes a difference. It does. – William James",
    // 72
    "You do not find the happy life. You make it. – Camilla E. Kimball",
    // 73
    "The best way to predict the future is to create it. – Peter Drucker",
    // 74
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    // 75
    "You can’t go back and change the beginning, but you can start where you are and change the ending. – C.S. Lewis",
    // 76
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 77
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    // 78
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    // 79
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 80
    "Opportunities don't happen. You create them. – Chris Grosser",
    // 81
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 82
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    // 83
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 84
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    // 85
    "Happiness depends upon ourselves. – Aristotle",
    // 86
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    // 87
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 88
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 89
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 90
    "The best way to predict the future is to create it. – Peter Drucker",
    // 91
    "The only way to do great work is to love what you do. – Steve Jobs",
    // 92
    "You can’t go back and change the beginning, but you can start where you are and change the ending. – C.S. Lewis",
    // 93
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. – Albert Schweitzer",
    // 94
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 95
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    // 96
    "Opportunities don't happen. You create them. – Chris Grosser",
    // 97
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 98
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    // 99
    "You do not find the happy life. You make it. – Camilla E. Kimball",
    // 100
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis"
    ],

    "Famous Quotes": [
    // 1
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    // 2
    "I think, therefore I am. – René Descartes",
    // 3
    "To be, or not to be, that is the question. – William Shakespeare",
    // 4
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 5
    "The unexamined life is not worth living. – Socrates",
    // 6
    "To thine own self be true. – William Shakespeare",
    // 7
    "I have a dream. – Martin Luther King Jr.",
    // 8
    "That which does not kill us makes us stronger. – Friedrich Nietzsche",
    // 9
    "The only thing necessary for the triumph of evil is for good men to do nothing. – Edmund Burke",
    // 10
    "The journey of a thousand miles begins with one step. – Lao Tzu",
    // 11
    "The greatest wealth is to live content with little. – Plato",
    // 12
    "I am the master of my fate: I am the captain of my soul. – William Ernest Henley",
    // 13
    "All that glitters is not gold. – William Shakespeare",
    // 14
    "The pen is mightier than the sword. – Edward Bulwer-Lytton",
    // 15
    "To err is human; to forgive, divine. – Alexander Pope",
    // 16
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 17
    "In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost",
    // 18
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 19
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    // 20
    "A journey of a thousand miles begins with a single step. – Lao Tzu",
    // 21
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    // 22
    "The only way to do great work is to love what you do. – Steve Jobs",
    // 23
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    // 24
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    // 25
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    // 26
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 27
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 28
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 29
    "Life is what happens when you’re busy making other plans. – John Lennon",
    // 30
    "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
    // 31
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    // 32
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    // 33
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 34
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    // 35
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    // 36
    "You must do the things you think you cannot do. – Eleanor Roosevelt",
    // 37
    "The best way to predict the future is to create it. – Peter Drucker",
    // 38
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    // 39
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    // 40
    "Happiness depends upon ourselves. – Aristotle",
    // 41
    "The only impossible journey is the one you never begin. – Tony Robbins",
    // 42
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 43
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    // 44
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    // 45
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 46
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 47
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 48
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    // 49
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 50
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    // 51
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    // 52
    "The best way to predict the future is to create it. – Peter Drucker",
    // 53
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    // 54
    "The only impossible journey is the one you never begin. – Tony Robbins",
    // 55
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 56
    "In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost",
    // 57
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 58
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    // 59
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    // 60
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    // 61
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    // 62
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    // 63
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 64
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 65
    "Happiness depends upon ourselves. – Aristotle",
    // 66
    "Life is what happens when you’re busy making other plans. – John Lennon",
    // 67
    "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
    // 68
    "The only way to do great work is to love what you do. – Steve Jobs",
    // 69
    "Believe you can and you’re halfway there. – Theodore Roosevelt",
    // 70
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    // 71
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 72
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 73
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    // 74
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    // 75
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 76
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    // 77
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 78
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    // 79
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    // 80
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    // 81
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 82
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    // 83
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 84
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 85
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    // 86
    "In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost",
    // 87
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    // 88
    "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
    // 89
    "The only way to do great work is to love what you do. – Steve Jobs",
    // 90
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    // 91
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 92
    "Happiness depends upon ourselves. – Aristotle",
    // 93
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    // 94
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 95
    "The best way to predict the future is to create it. – Peter Drucker",
    // 96
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 97
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 98
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 99
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 100
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis"
    ],

    "Religious/Spiritual Quotes": [
    // 1
    "Faith is taking the first step even when you don’t see the whole staircase. – Martin Luther King Jr.",
    // 2
    "The only thing necessary for the triumph of evil is for good men to do nothing. – Edmund Burke",
    // 3
    "God does not play dice with the universe. – Albert Einstein",
    // 4
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    // 5
    "When you are grateful, fear disappears and abundance appears. – Tony Robbins",
    // 6
    "To love and be loved is to feel the sun from both sides. – David Viscott",
    // 7
    "The Kingdom of God is within you. – Jesus Christ",
    // 8
    "Peace begins with a smile. – Mother Teresa",
    // 9
    "The soul always knows what to do to heal itself. The challenge is to silence the mind. – Caroline Myss",
    // 10
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 11
    "The highest form of ignorance is when you reject something you don’t know anything about. – Wayne Dyer",
    // 12
    "The more you praise and celebrate your life, the more there is in life to celebrate. – Oprah Winfrey",
    // 13
    "Spirituality is not about adopting more beliefs and assumptions but about abandoning them. – Timothy Gallwey",
    // 14
    "The way to know life is to love many things. – Vincent Van Gogh",
    // 15
    "When we are no longer able to change a situation, we are challenged to change ourselves. – Viktor E. Frankl",
    // 16
    "God loves each of us as if there were only one of us. – Saint Augustine",
    // 17
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    // 18
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    // 19
    "When you realize how perfect everything is, you will tilt your head back and laugh at the sky. – Buddha",
    // 20
    "The universe is not outside of you. Look inside yourself; everything that you want, you already are. – Rumi",
    // 21
    "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
    // 22
    "God does not play dice with the universe. – Albert Einstein",
    // 23
    "What you think you become. What you feel you attract. What you imagine you create. – Buddha",
    // 24
    "If you want to find God, hang out in the space between your thoughts. – Alan Cohen",
    // 25
    "Our greatest glory is not in never falling, but in rising every time we fall. – Confucius",
    // 26
    "Spirituality is not a religion. It is a way of living. – Anonymous",
    // 27
    "A person who never made a mistake never tried anything new. – Albert Einstein",
    // 28
    "The mind is everything. What you think you become. – Buddha",
    // 29
    "In the middle of difficulty lies opportunity. – Albert Einstein",
    // 30
    "When we are no longer able to change a situation, we are challenged to change ourselves. – Viktor E. Frankl",
    // 31
    "Everything has beauty, but not everyone can see. – Confucius",
    // 32
    "Life is really simple, but we insist on making it complicated. – Confucius",
    // 33
    "If you want to lift yourself up, lift up someone else. – Booker T. Washington",
    // 34
    "The best way to predict your future is to create it. – Peter Drucker",
    // 35
    "He who has a why to live can bear almost any how. – Friedrich Nietzsche",
    // 36
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    // 37
    "God does not play dice with the universe. – Albert Einstein",
    // 38
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    // 39
    "When you realize how perfect everything is, you will tilt your head back and laugh at the sky. – Buddha",
    // 40
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 41
    "The only way to do great work is to love what you do. – Steve Jobs",
    // 42
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson",
    // 43
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    // 44
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    // 45
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 46
    "The universe is not outside of you. Look inside yourself; everything that you want, you already are. – Rumi",
    // 47
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 48
    "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
    // 49
    "When you are grateful, fear disappears and abundance appears. – Tony Robbins",
    // 50
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    // 51
    "Everything has beauty, but not everyone can see. – Confucius",
    // 52
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    // 53
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    // 54
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 55
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. – Ralph Waldo Emerson",
    // 56
    "Spirituality is not about adopting more beliefs and assumptions but about abandoning them. – Tim Gallwey",
    // 57
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 58
    "When you are grateful, fear disappears and abundance appears. – Tony Robbins",
    // 59
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 60
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    // 61
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 62
    "Happiness depends upon ourselves. – Aristotle",
    // 63
    "God loves each of us as if there were only one of us. – Saint Augustine",
    // 64
    "The soul always knows what to do to heal itself. The challenge is to silence the mind. – Caroline Myss",
    // 65
    "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
    // 66
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 67
    "In three words I can sum up everything I’ve learned about life: it goes on. – Robert Frost",
    // 68
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 69
    "When you are grateful, fear disappears and abundance appears. – Tony Robbins",
    // 70
    "The way to know life is to love many things. – Vincent Van Gogh",
    // 71
    "Peace begins with a smile. – Mother Teresa",
    // 72
    "The mind is everything. What you think you become. – Buddha",
    // 73
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 74
    "When we are no longer able to change a situation, we are challenged to change ourselves. – Viktor E. Frankl",
    // 75
    "Spirituality is not a religion. It is a way of living. – Anonymous",
    // 76
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    // 77
    "God does not play dice with the universe. – Albert Einstein",
    // 78
    "The universe is not outside of you. Look inside yourself; everything that you want, you already are. – Rumi",
    // 79
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    // 80
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 81
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 82
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 83
    "The best way to predict your future is to create it. – Peter Drucker",
    // 84
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    // 85
    "Everything has beauty, but not everyone can see. – Confucius",
    // 86
    "The mind is everything. What you think you become. – Buddha",
    // 87
    "The only way to do great work is to love what you do. – Steve Jobs",
    // 88
    "Spirituality is not about adopting more beliefs and assumptions but about abandoning them. – Tim Gallwey",
    // 89
    "You can’t use up creativity. The more you use, the more you have. – Maya Angelou",
    // 90
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    // 91
    "The purpose of our lives is to be happy. – Dalai Lama",
    // 92
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 93
    "The best way to find yourself is to lose yourself in the service of others. – Mahatma Gandhi",
    // 94
    "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",
    // 95
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 96
    "When you realize how perfect everything is, you will tilt your head back and laugh at the sky. – Buddha",
    // 97
    "Peace begins with a smile. – Mother Teresa",
    // 98
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    // 99
    "The way to know life is to love many things. – Vincent Van Gogh",
    // 100
    "The mind is everything. What you think you become. – Buddha"
    ],

    "Leadership Quotes": [
    // 1
    "The function of leadership is to produce more leaders, not more followers. – Ralph Nader",
    // 2
    "The best way to predict the future is to create it. – Peter Drucker",
    // 3
    "Leadership is not about being in charge. It is about taking care of those in your charge. – Simon Sinek",
    // 4
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. – Ronald Reagan",
    // 5
    "To handle yourself, use your head; to handle others, use your heart. – Eleanor Roosevelt",
    // 6
    "Leadership is the capacity to translate vision into reality. – Warren Bennis",
    // 7
    "You don’t have to be in charge to be a leader. – Anonymous",
    // 8
    "The most powerful leadership tool you have is your own personal example. – John Wooden",
    // 9
    "A leader is one who knows the way, goes the way, and shows the way. – John C. Maxwell",
    // 10
    "The function of leadership is to produce more leaders, not more followers. – Ralph Nader",
    // 11
    "Leadership is not about being in control. It is about inspiring others to take control. – Anonymous",
    // 12
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. – Ronald Reagan",
    // 13
    "A leader is someone who demonstrates what’s possible. – Mark Hurd",
    // 14
    "Leadership is not about being the best. It is about making everyone else better. – Anonymous",
    // 15
    "You don’t have to be in charge to be a leader. – Anonymous",
    // 16
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 17
    "The true measure of leadership is not how much you can achieve on your own, but how much you can help others achieve. – Anonymous",
    // 18
    "Leaders who are truly confident do not need to show it. – Anonymous",
    // 19
    "A leader is someone who knows the way, goes the way, and shows the way. – John C. Maxwell",
    // 20
    "The most powerful leadership tool you have is your own personal example. – John Wooden",
    // 21
    "Great leaders are willing to sacrifice their own personal interests for the good of the team. – Anonymous",
    // 22
    "A leader is one who knows the way, goes the way, and shows the way. – John C. Maxwell",
    // 23
    "Leadership is not about being in charge. It is about taking care of those in your charge. – Simon Sinek",
    // 24
    "The function of leadership is to produce more leaders, not more followers. – Ralph Nader",
    // 25
    "The best way to predict the future is to create it. – Peter Drucker",
    // 26
    "To handle yourself, use your head; to handle others, use your heart. – Eleanor Roosevelt",
    // 27
    "Leadership is the capacity to translate vision into reality. – Warren Bennis",
    // 28
    "You don’t have to be in charge to be a leader. – Anonymous",
    // 29
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. – Ronald Reagan",
    // 30
    "The most powerful leadership tool you have is your own personal example. – John Wooden",
    // 31
    "The true measure of leadership is not how much you can achieve on your own, but how much you can help others achieve. – Anonymous",
    // 32
    "Leadership is not about being the best. It is about making everyone else better. – Anonymous",
    // 33
    "A leader is someone who demonstrates what’s possible. – Mark Hurd",
    // 34
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 35
    "Great leaders are willing to sacrifice their own personal interests for the good of the team. – Anonymous",
    // 36
    "Leadership is the capacity to translate vision into reality. – Warren Bennis",
    // 37
    "The most powerful leadership tool you have is your own personal example. – John Wooden",
    // 38
    "A leader is someone who knows the way, goes the way, and shows the way. – John C. Maxwell",
    // 39
    "The function of leadership is to produce more leaders, not more followers. – Ralph Nader",
    // 40
    "To handle yourself, use your head; to handle others, use your heart. – Eleanor Roosevelt",
    // 41
    "Leadership is not about being in charge. It is about taking care of those in your charge. – Simon Sinek",
    // 42
    "You don’t have to be in charge to be a leader. – Anonymous",
    // 43
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. – Ronald Reagan",
    // 44
    "The true measure of leadership is not how much you can achieve on your own, but how much you can help others achieve. – Anonymous",
    // 45
    "A leader is someone who demonstrates what’s possible. – Mark Hurd",
    // 46
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 47
    "Great leaders are willing to sacrifice their own personal interests for the good of the team. – Anonymous",
    // 48
    "Leadership is not about being the best. It is about making everyone else better. – Anonymous",
    // 49
    "You don’t have to be in charge to be a leader. – Anonymous",
    // 50
    "The best way to predict the future is to create it. – Peter Drucker",
    // 51
    "The most powerful leadership tool you have is your own personal example. – John Wooden",
    // 52
    "A leader is one who knows the way, goes the way, and shows the way. – John C. Maxwell",
    // 53
    "The function of leadership is to produce more leaders, not more followers. – Ralph Nader",
    // 54
    "Leadership is the capacity to translate vision into reality. – Warren Bennis",
    // 55
    "To handle yourself, use your head; to handle others, use your heart. – Eleanor Roosevelt",
    // 56
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. – Ronald Reagan",
    // 57
    "The true measure of leadership is not how much you can achieve on your own, but how much you can help others achieve. – Anonymous",
    // 58
    "A leader is someone who demonstrates what’s possible. – Mark Hurd",
    // 59
    "Great leaders are willing to sacrifice their own personal interests for the good of the team. – Anonymous",
    // 60
    "Leadership is not about being the best. It is about making everyone else better. – Anonymous",
    // 61
    "You don’t have to be in charge to be a leader. – Anonymous",
    // 62
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 63
    "The best way to predict the future is to create it. – Peter Drucker",
    // 64
    "The most powerful leadership tool you have is your own personal example. – John Wooden",
    // 65
    "A leader is one who knows the way, goes the way, and shows the way. – John C. Maxwell",
    // 66
    "The function of leadership is to produce more leaders, not more followers. – Ralph Nader",
    // 67
    "Leadership is the capacity to translate vision into reality. – Warren Bennis",
    // 68
    "To handle yourself, use your head; to handle others, use your heart. – Eleanor Roosevelt",
    // 69
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. – Ronald Reagan",
    // 70
    "The true measure of leadership is not how much you can achieve on your own, but how much you can help others achieve. – Anonymous",
    // 71
    "A leader is someone who demonstrates what’s possible. – Mark Hurd",
    // 72
    "Great leaders are willing to sacrifice their own personal interests for the good of the team. – Anonymous",
    // 73
    "Leadership is not about being the best. It is about making everyone else better. – Anonymous",
    // 74
    "You don’t have to be in charge to be a leader. – Anonymous",
    // 75
    "The best way to predict the future is to create it. – Peter Drucker",
    // 76
    "The most powerful leadership tool you have is your own personal example. – John Wooden",
    // 77
    "A leader is one who knows the way, goes the way, and shows the way. – John C. Maxwell",
    // 78
    "The function of leadership is to produce more leaders, not more followers. – Ralph Nader",
    // 79
    "Leadership is the capacity to translate vision into reality. – Warren Bennis",
    // 80
    "To handle yourself, use your head; to handle others, use your heart. – Eleanor Roosevelt",
    // 81
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. – Ronald Reagan",
    // 82
    "The true measure of leadership is not how much you can achieve on your own, but how much you can help others achieve. – Anonymous",
    // 83
    "A leader is someone who demonstrates what’s possible. – Mark Hurd",
    // 84
    "Great leaders are willing to sacrifice their own personal interests for the good of the team. – Anonymous",
    // 85
    "Leadership is not about being the best. It is about making everyone else better. – Anonymous",
    // 86
    "You don’t have to be in charge to be a leader. – Anonymous",
    // 87
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 88
    "The best way to predict the future is to create it. – Peter Drucker",
    // 89
    "The most powerful leadership tool you have is your own personal example. – John Wooden",
    // 90
    "A leader is one who knows the way, goes the way, and shows the way. – John C. Maxwell",
    // 91
    "The function of leadership is to produce more leaders, not more followers. – Ralph Nader",
    // 92
    "Leadership is the capacity to translate vision into reality. – Warren Bennis",
    // 93
    "To handle yourself, use your head; to handle others, use your heart. – Eleanor Roosevelt",
    // 94
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. – Ronald Reagan",
    // 95
    "The true measure of leadership is not how much you can achieve on your own, but how much you can help others achieve. – Anonymous",
    // 96
    "A leader is someone who demonstrates what’s possible. – Mark Hurd",
    // 97
    "Great leaders are willing to sacrifice their own personal interests for the good of the team. – Anonymous",
    // 98
    "Leadership is not about being the best. It is about making everyone else better. – Anonymous",
    // 99
    "You don’t have to be in charge to be a leader. – Anonymous",
    // 100
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt"
    ],

    "Historical Quotes": [
    // 1
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    // 2
    "Those who do not remember the past are condemned to repeat it. – George Santayana",
    // 3
    "History is written by the victors. – Winston Churchill",
    // 4
    "Injustice anywhere is a threat to justice everywhere. – Martin Luther King Jr.",
    // 5
    "The past is a foreign country; they do things differently there. – L.P. Hartley",
    // 6
    "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. – Albert Camus",
    // 7
    "Those who cannot remember the past are condemned to repeat it. – George Santayana",
    // 8
    "The further backward you can look, the further forward you are likely to see. – Winston Churchill",
    // 9
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    // 10
    "The arc of the moral universe is long, but it bends toward justice. – Martin Luther King Jr.",
    // 11
    "What we achieve inwardly will change outer reality. – Plutarch",
    // 12
    "Those who dare to fail miserably can achieve greatly. – John F. Kennedy",
    // 13
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    // 14
    "The best way to predict your future is to create it. – Peter Drucker",
    // 15
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 16
    "The future belongs to those who prepare for it today. – Malcolm X",
    // 17
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    // 18
    "History will judge us by the difference we make in the everyday lives of children. – Nelson Mandela",
    // 19
    "The harder the conflict, the greater the triumph. – George Washington",
    // 20
    "You cannot escape the responsibility of tomorrow by evading it today. – Abraham Lincoln",
    // 21
    "In the end, it’s not the years in your life that count. It’s the life in your years. – Abraham Lincoln",
    // 22
    "The greatest glory of a free-born people is to transmit that freedom to their children. – William Harcourt",
    // 23
    "The only real prison is fear, and the only real freedom is freedom from fear. – Aung San Suu Kyi",
    // 24
    "We are not makers of history. We are made by history. – Martin Luther King Jr.",
    // 25
    "The price of greatness is responsibility. – Winston Churchill",
    // 26
    "To improve is to change; to be perfect is to change often. – Winston Churchill",
    // 27
    "We can complain because rose bushes have thorns, or rejoice because thorns have roses. – Abraham Lincoln",
    // 28
    "The history of all hitherto existing society is the history of class struggles. – Karl Marx",
    // 29
    "The good news is that history is not just about the past; it’s about the future as well. – Margaret MacMillan",
    // 30
    "Those who make peaceful revolution impossible will make violent revolution inevitable. – John F. Kennedy",
    // 31
    "The best way to predict the future is to invent it. – Alan Kay",
    // 32
    "History does not repeat itself, but it often rhymes. – Mark Twain",
    // 33
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. – Charles Darwin",
    // 34
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    // 35
    "A person who never made a mistake never tried anything new. – Albert Einstein",
    // 36
    "The empires of the future are the empires of the mind. – Winston Churchill",
    // 37
    "The more you know about the past, the better prepared you are for the future. – Theodore Roosevelt",
    // 38
    "History is a vast early warning system. – Norman Cousins",
    // 39
    "The story of the human race is the story of people selling themselves short. – Abraham Maslow",
    // 40
    "The only way to deal with the future is to function efficiently in the now. – Gurdjieff",
    // 41
    "There are no secrets that time does not reveal. – Jean Racine",
    // 42
    "The more things change, the more they stay the same. – Jean-Baptiste Alphonse Karr",
    // 43
    "History is the witness that testifies to the passing of time. – Voltaire",
    // 44
    "The history of the world is but the biography of great men. – Thomas Carlyle",
    // 45
    "Those who cannot remember the past are condemned to repeat it. – George Santayana",
    // 46
    "We are made wise not by the recollection of our past, but by the responsibility for our future. – George Bernard Shaw",
    // 47
    "History is a series of lies agreed upon. – Napoleon Bonaparte",
    // 48
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 49
    "The future belongs to those who prepare for it today. – Malcolm X",
    // 50
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. – Charles Darwin",
    // 51
    "Those who make peaceful revolution impossible will make violent revolution inevitable. – John F. Kennedy",
    // 52
    "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. – Albert Camus",
    // 53
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    // 54
    "History is written by the victors. – Winston Churchill",
    // 55
    "The best way to predict your future is to create it. – Peter Drucker",
    // 56
    "The past is a foreign country; they do things differently there. – L.P. Hartley",
    // 57
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    // 58
    "The arc of the moral universe is long, but it bends toward justice. – Martin Luther King Jr.",
    // 59
    "The future belongs to those who prepare for it today. – Malcolm X",
    // 60
    "You must be the change you wish to see in the world. – Mahatma Gandhi",
    // 61
    "The harder the conflict, the greater the triumph. – George Washington",
    // 62
    "The price of greatness is responsibility. – Winston Churchill",
    // 63
    "We are not makers of history. We are made by history. – Martin Luther King Jr.",
    // 64
    "Life is either a daring adventure or nothing at all. – Helen Keller",
    // 65
    "Those who dare to fail miserably can achieve greatly. – John F. Kennedy",
    // 66
    "The only real prison is fear, and the only real freedom is freedom from fear. – Aung San Suu Kyi",
    // 67
    "We can complain because rose bushes have thorns, or rejoice because thorns have roses. – Abraham Lincoln",
    // 68
    "The best way to predict the future is to invent it. – Alan Kay",
    // 69
    "The more you know about the past, the better prepared you are for the future. – Theodore Roosevelt",
    // 70
    "The story of the human race is the story of people selling themselves short. – Abraham Maslow",
    // 71
    "There are no secrets that time does not reveal. – Jean Racine",
    // 72
    "The history of the world is but the biography of great men. – Thomas Carlyle",
    // 73
    "History is the witness that testifies to the passing of time. – Voltaire",
    // 74
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 75
    "The more things change, the more they stay the same. – Jean-Baptiste Alphonse Karr",
    // 76
    "The only way to deal with the future is to function efficiently in the now. – Gurdjieff",
    // 77
    "We are made wise not by the recollection of our past, but by the responsibility for our future. – George Bernard Shaw",
    // 78
    "The price of greatness is responsibility. – Winston Churchill",
    // 79
    "History is a vast early warning system. – Norman Cousins",
    // 80
    "History does not repeat itself, but it often rhymes. – Mark Twain",
    // 81
    "The good news is that history is not just about the past; it’s about the future as well. – Margaret MacMillan",
    // 82
    "History is the story of events, with praise or blame. – Philip Guedalla",
    // 83
    "History is a series of lies agreed upon. – Napoleon Bonaparte",
    // 84
    "The most powerful leadership tool you have is your own personal example. – John Wooden",
    // 85
    "The further backward you can look, the further forward you are likely to see. – Winston Churchill",
    // 86
    "The greatest glory of a free-born people is to transmit that freedom to their children. – William Harcourt",
    // 87
    "The history of all hitherto existing society is the history of class struggles. – Karl Marx",
    // 88
    "The past is not dead. It is not even past. – William Faulkner",
    // 89
    "The past is a foreign country; they do things differently there. – L.P. Hartley",
    // 90
    "The past is a place of reference, not a place of residence. – Robin Sharma",
    // 91
    "The history of the world is but the biography of great men. – Thomas Carlyle",
    // 92
    "History is a gallery of pictures in which there are few originals and many copies. – Alexis de Tocqueville",
    // 93
    "The history of mankind is a history of repeated injuries and usurpations on the part of the strong against the weak. – Thomas Jefferson",
    // 94
    "History is the sum total of the people who have come before us and what they have done. – Anonymous",
    // 95
    "The present is the past rolled up for action, and the past is the present unrolled for understanding. – William Faulkner",
    // 96
    "The only thing new in the world is the history you do not know. – Harry S. Truman",
    // 97
    "The past is the prologue. – William Shakespeare",
    // 98
    "We can’t change the past, but we can make the future better. – Anonymous",
    // 99
    "The past is the best predictor of the future. – Anonymous",
    // 100
    "The history of the world is the history of progress. – Anonymous"
    ],

    "Educational Quotes": [
    // 1
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    // 2
    "The roots of education are bitter, but the fruit is sweet. – Aristotle",
    // 3
    "An investment in knowledge pays the best interest. – Benjamin Franklin",
    // 4
    "Education is not the filling of a pail, but the lighting of a fire. – William Butler Yeats",
    // 5
    "The only person who is educated is the one who has learned how to learn and change. – Carl Rogers",
    // 6
    "Education is the key to unlock the golden door of freedom. – George Washington Carver",
    // 7
    "The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education. – Martin Luther King Jr.",
    // 8
    "Education is what remains after one has forgotten what one has learned in school. – Albert Einstein",
    // 9
    "The goal of education is the advancement of knowledge and the dissemination of truth. – John F. Kennedy",
    // 10
    "Education is not preparation for life; education is life itself. – John Dewey",
    // 11
    "The best way to predict your future is to create it. – Peter Drucker",
    // 12
    "It is the mark of an educated mind to be able to entertain a thought without accepting it. – Aristotle",
    // 13
    "The purpose of education is to replace an empty mind with an open one. – Malcolm Forbes",
    // 14
    "Education is the most powerful weapon you can use to change the world. – Nelson Mandela",
    // 15
    "Education is a progressive discovery of our own ignorance. – Will Durant",
    // 16
    "Learning is not the product of teaching. Learning is the product of the activity of learners. – John Holt",
    // 17
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 18
    "A child educated only at school is an uneducated child. – George Santayana",
    // 19
    "The more that you read, the more things you will know. The more that you learn, the more places you’ll go. – Dr. Seuss",
    // 20
    "The aim of education is the knowledge not of facts but of values. – William Ralph Inge",
    // 21
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    // 22
    "To teach is to learn twice. – Joseph Joubert",
    // 23
    "Education is the movement from darkness to light. – Allan Bloom",
    // 24
    "In learning you will teach, and in teaching you will learn. – Phil Collins",
    // 25
    "The highest result of education is tolerance. – Helen Keller",
    // 26
    "Education is a journey, not a destination. – Anonymous",
    // 27
    "Education is the key to unlock the golden door of freedom. – George Washington Carver",
    // 28
    "Education is not the learning of facts, but the training of the mind to think. – Albert Einstein",
    // 29
    "The mind is not a vessel to be filled, but a fire to be kindled. – Plutarch",
    // 30
    "Education is the best friend. An educated person is respected everywhere. Education beats the beauty and the youth. – Chanakya",
    // 31
    "Education is the key to unlock the golden door of freedom. – George Washington Carver",
    // 32
    "An investment in knowledge pays the best interest. – Benjamin Franklin",
    // 33
    "The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education. – Martin Luther King Jr.",
    // 34
    "The only person who is educated is the one who has learned how to learn and change. – Carl Rogers",
    // 35
    "The best way to predict your future is to create it. – Peter Drucker",
    // 36
    "Education is the movement from darkness to light. – Allan Bloom",
    // 37
    "To teach is to learn twice. – Joseph Joubert",
    // 38
    "The purpose of education is to replace an empty mind with an open one. – Malcolm Forbes",
    // 39
    "Education is not preparation for life; education is life itself. – John Dewey",
    // 40
    "The more that you read, the more things you will know. The more that you learn, the more places you’ll go. – Dr. Seuss",
    // 41
    "Education is the key to unlock the golden door of freedom. – George Washington Carver",
    // 42
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 43
    "The highest result of education is tolerance. – Helen Keller",
    // 44
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    // 45
    "The best way to predict your future is to create it. – Peter Drucker",
    // 46
    "The purpose of education is to replace an empty mind with an open one. – Malcolm Forbes",
    // 47
    "Education is a journey, not a destination. – Anonymous",
    // 48
    "The aim of education is the knowledge not of facts but of values. – William Ralph Inge",
    // 49
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    // 50
    "To teach is to learn twice. – Joseph Joubert",
    // 51
    "Education is the movement from darkness to light. – Allan Bloom",
    // 52
    "In learning you will teach, and in teaching you will learn. – Phil Collins",
    // 53
    "Education is not the learning of facts, but the training of the mind to think. – Albert Einstein",
    // 54
    "The mind is not a vessel to be filled, but a fire to be kindled. – Plutarch",
    // 55
    "Education is a progressive discovery of our own ignorance. – Will Durant",
    // 56
    "Learning is not the product of teaching. Learning is the product of the activity of learners. – John Holt",
    // 57
    "The more you know about the past, the better prepared you are for the future. – Theodore Roosevelt",
    // 58
    "Education is the key to unlock the golden door of freedom. – George Washington Carver",
    // 59
    "The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education. – Martin Luther King Jr.",
    // 60
    "The roots of education are bitter, but the fruit is sweet. – Aristotle",
    // 61
    "An investment in knowledge pays the best interest. – Benjamin Franklin",
    // 62
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    // 63
    "Education is not preparation for life; education is life itself. – John Dewey",
    // 64
    "The only person who is educated is the one who has learned how to learn and change. – Carl Rogers",
    // 65
    "The best way to predict your future is to create it. – Peter Drucker",
    // 66
    "Education is not the learning of facts, but the training of the mind to think. – Albert Einstein",
    // 67
    "The mind is not a vessel to be filled, but a fire to be kindled. – Plutarch",
    // 68
    "Education is the best friend. An educated person is respected everywhere. Education beats the beauty and the youth. – Chanakya",
    // 69
    "Education is the movement from darkness to light. – Allan Bloom",
    // 70
    "To teach is to learn twice. – Joseph Joubert",
    // 71
    "Education is a journey, not a destination. – Anonymous",
    // 72
    "The more that you read, the more things you will know. The more that you learn, the more places you’ll go. – Dr. Seuss",
    // 73
    "The purpose of education is to replace an empty mind with an open one. – Malcolm Forbes",
    // 74
    "The highest result of education is tolerance. – Helen Keller",
    // 75
    "Education is the key to unlock the golden door of freedom. – George Washington Carver",
    // 76
    "The future belongs to those who prepare for it today. – Malcolm X",
    // 77
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    // 78
    "The best way to predict your future is to create it. – Peter Drucker",
    // 79
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    // 80
    "Education is the movement from darkness to light. – Allan Bloom",
    // 81
    "In learning you will teach, and in teaching you will learn. – Phil Collins",
    // 82
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    // 83
    "To teach is to learn twice. – Joseph Joubert",
    // 84
    "Education is not preparation for life; education is life itself. – John Dewey",
    // 85
    "The roots of education are bitter, but the fruit is sweet. – Aristotle",
    // 86
    "An investment in knowledge pays the best interest. – Benjamin Franklin",
    // 87
    "Education is the key to unlock the golden door of freedom. – George Washington Carver",
    // 88
    "The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education. – Martin Luther King Jr.",
    // 89
    "Education is a progressive discovery of our own ignorance. – Will Durant",
    // 90
    "Learning is not the product of teaching. Learning is the product of the activity of learners. – John Holt",
    // 91
    "Education is the movement from darkness to light. – Allan Bloom",
    // 92
    "To teach is to learn twice. – Joseph Joubert",
    // 93
    "The best way to predict your future is to create it. – Peter Drucker",
    // 94
    "The highest result of education is tolerance. – Helen Keller",
    // 95
    "The more you know about the past, the better prepared you are for the future. – Theodore Roosevelt",
    // 96
    "Education is the best friend. An educated person is respected everywhere. Education beats the beauty and the youth. – Chanakya",
    // 97
    "The mind is not a vessel to be filled, but a fire to be kindled. – Plutarch",
    // 98
    "Education is the most powerful weapon which you can use to change the world. – Nelson Mandela",
    // 99
    "Education is not preparation for life; education is life itself. – John Dewey",
    // 100
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt"
    ],

    "Cultural Quotes": [
    // 1
    "Culture is the widening of the mind and of the spirit. – Jawaharlal Nehru",
    // 2
    "The strength of a nation derives from the integrity of the home. – Confucius",
    // 3
    "Culture is the process by which a person becomes all that they were created capable of being. – Thomas Carlyle",
    // 4
    "A nation’s culture resides in the hearts and in the soul of its people. – Mahatma Gandhi",
    // 5
    "The function of culture is to provide the means by which we can understand and interpret the world in a meaningful way. – Michael Harris",
    // 6
    "Culture is the most powerful weapon for changing the world. – Nelson Mandela",
    // 7
    "Culture is not just an accessory to human life; it is a fundamental part of human experience. – Victor Hugo",
    // 8
    "Culture is the sum of all the ways of life and forms of expression that humans use to make sense of the world. – Anonymous",
    // 9
    "The purpose of culture is to provide a framework for people to understand their own existence and their place in the world. – Paul Valéry",
    // 10
    "Cultural diversity is a defining characteristic of our world. – Ban Ki-moon",
    // 11
    "Culture is the arts elevated to a set of beliefs. – David Byrne",
    // 12
    "Culture is a way of coping with the world by defining it in detail. – Malcolm Bradbury",
    // 13
    "Culture is the set of shared attitudes, values, goals, and practices that characterizes an institution or organization. – Anonymous",
    // 14
    "Culture is the most effective way of promoting mutual understanding between nations. – John F. Kennedy",
    // 15
    "The beauty of the world lies in the diversity of its people. – Anonymous",
    // 16
    "Culture is the great equalizer; it transcends boundaries and brings people together. – Anonymous",
    // 17
    "Culture is a reflection of a society’s history, traditions, and values. – Anonymous",
    // 18
    "Culture is the foundation of human society and the means by which we communicate our deepest thoughts and feelings. – Anonymous",
    // 19
    "Culture is the fabric of society that binds us together and gives us meaning. – Anonymous",
    // 20
    "A rich culture is the backbone of a vibrant community. – Anonymous",
    // 21
    "Culture is the essence of humanity’s collective experiences and aspirations. – Anonymous",
    // 22
    "Culture is the living record of human thought, imagination, and creativity. – Anonymous",
    // 23
    "Culture is the reservoir of a society’s collective wisdom and knowledge. – Anonymous",
    // 24
    "Culture is the art of living together harmoniously. – Anonymous",
    // 25
    "Culture is the product of human creativity and innovation. – Anonymous",
    // 26
    "Culture is the tapestry of human experiences that enrich our lives. – Anonymous",
    // 27
    "Culture is the mirror through which we see ourselves and others. – Anonymous",
    // 28
    "Culture is the thread that weaves together the fabric of human society. – Anonymous",
    // 29
    "Culture is the lens through which we view the world and interpret our experiences. – Anonymous",
    // 30
    "Culture is the heartbeat of a community and the soul of a nation. – Anonymous",
    // 31
    "Culture is the shared heritage and traditions that define a group of people. – Anonymous",
    // 32
    "Culture is the story of a people told through their art, language, and customs. – Anonymous",
    // 33
    "Culture is the legacy of our ancestors and the gift we leave to future generations. – Anonymous",
    // 34
    "Culture is the canvas on which we paint our hopes, dreams, and aspirations. – Anonymous",
    // 35
    "Culture is the symphony of human expression and creativity. – Anonymous",
    // 36
    "Culture is the blueprint of a society’s values and beliefs. – Anonymous",
    // 37
    "Culture is the soul of a people and the foundation of their identity. – Anonymous",
    // 38
    "Culture is the prism through which we view the world and make sense of our place in it. – Anonymous",
    // 39
    "Culture is the cornerstone of civilization and the bedrock of human progress. – Anonymous",
    // 40
    "Culture is the thread that connects us to our past, present, and future. – Anonymous",
    // 41
    "Culture is the expression of human creativity and imagination. – Anonymous",
    // 42
    "Culture is the living history of a people and the key to their future. – Anonymous",
    // 43
    "Culture is the foundation of our shared experiences and collective memories. – Anonymous",
    // 44
    "Culture is the essence of what makes us human and the source of our greatest achievements. – Anonymous",
    // 45
    "Culture is the canvas on which we paint our dreams and aspirations. – Anonymous",
    // 46
    "Culture is the pulse of a society and the beacon of its values. – Anonymous",
    // 47
    "Culture is the bond that unites us and the framework that guides our actions. – Anonymous",
    // 48
    "Culture is the mirror of a society’s values, beliefs, and traditions. – Anonymous",
    // 49
    "Culture is the map that guides us through the complexities of human experience. – Anonymous",
    // 50
    "Culture is the heart of a community and the soul of a nation. – Anonymous",
    // 51
    "Culture is the lens through which we interpret our surroundings and our place in the world. – Anonymous",
    // 52
    "Culture is the rich tapestry of human experience and expression. – Anonymous",
    // 53
    "Culture is the source of our greatest achievements and the foundation of our shared values. – Anonymous",
    // 54
    "Culture is the bridge that connects us to our past and our future. – Anonymous",
    // 55
    "Culture is the essence of our collective experiences and aspirations. – Anonymous",
    // 56
    "Culture is the reflection of a society’s history and identity. – Anonymous",
    // 57
    "Culture is the repository of human knowledge and creativity. – Anonymous",
    // 58
    "Culture is the living testament to human ingenuity and expression. – Anonymous",
    // 59
    "Culture is the framework through which we understand our world and our place in it. – Anonymous",
    // 60
    "Culture is the heartbeat of human society and the source of its vitality. – Anonymous",
    // 61
    "Culture is the treasure chest of human wisdom and experience. – Anonymous",
    // 62
    "Culture is the symphony of human creativity and imagination. – Anonymous",
    // 63
    "Culture is the tapestry that binds us together and shapes our identity. – Anonymous",
    // 64
    "Culture is the map that guides us through the complexities of human existence. – Anonymous",
    // 65
    "Culture is the rich legacy of human experience and expression. – Anonymous",
    // 66
    "Culture is the heartbeat of our shared human experience. – Anonymous",
    // 67
    "Culture is the lens through which we view the world and our place in it. – Anonymous",
    // 68
    "Culture is the foundation of our collective memories and experiences. – Anonymous",
    // 69
    "Culture is the mirror of our deepest values and beliefs. – Anonymous",
    // 70
    "Culture is the key to understanding our past, present, and future. – Anonymous",
    // 71
    "Culture is the living record of human thought and creativity. – Anonymous",
    // 72
    "Culture is the essence of what makes us human and the source of our greatest achievements. – Anonymous",
    // 73
    "Culture is the bond that unites us and the framework that guides our actions. – Anonymous",
    // 74
    "Culture is the foundation of our shared experiences and collective memories. – Anonymous",
    // 75
    "Culture is the treasure of human experience and the key to our future. – Anonymous",
    // 76
    "Culture is the rich tapestry of human creativity and expression. – Anonymous",
    // 77
    "Culture is the mirror through which we see ourselves and our society. – Anonymous",
    // 78
    "Culture is the blueprint of a society’s values and beliefs. – Anonymous",
    // 79
    "Culture is the heartbeat of a community and the soul of a nation. – Anonymous",
    // 80
    "Culture is the essence of our collective experiences and aspirations. – Anonymous",
    // 81
    "Culture is the living testament to human ingenuity and creativity. – Anonymous",
    // 82
    "Culture is the thread that connects us to our past and shapes our future. – Anonymous",
    // 83
    "Culture is the map that guides us through the complexities of human experience. – Anonymous",
    // 84
    "Culture is the heartbeat of our shared human identity. – Anonymous",
    // 85
    "Culture is the lens through which we interpret the world and our place in it. – Anonymous",
    // 86
    "Culture is the foundation of our collective memories and experiences. – Anonymous",
    // 87
    "Culture is the essence of what makes us human and the key to our future. – Anonymous",
    // 88
    "Culture is the rich tapestry of human thought and expression. – Anonymous",
    // 89
    "Culture is the mirror of our deepest values and beliefs. – Anonymous",
    // 90
    "Culture is the key to understanding our place in the world and our shared humanity. – Anonymous",
    // 91
    "Culture is the heartbeat of our shared experiences and aspirations. – Anonymous",
    // 92
    "Culture is the treasure chest of human creativity and expression. – Anonymous",
    // 93
    "Culture is the essence of our collective identity and the source of our greatest achievements. – Anonymous",
    // 94
    "Culture is the blueprint of our shared values and traditions. – Anonymous",
    // 95
    "Culture is the bond that unites us and shapes our shared experience. – Anonymous",
    // 96
    "Culture is the living record of our collective wisdom and creativity. – Anonymous",
    // 97
    "Culture is the tapestry of human experience and expression. – Anonymous",
    // 98
    "Culture is the mirror through which we view our society and ourselves. – Anonymous",
    // 99
    "Culture is the key to understanding our past, present, and future. – Anonymous",
    // 100
    "Culture is the essence of what makes us human and the source of our greatest achievements. – Anonymous"
    ],

    "Environmental Quotes": [
    // 1
    "The environment is where we all meet; where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 2
    "The Earth does not belong to us: we belong to the Earth. – Marlee Matlin",
    // 3
    "We won’t have a society if we destroy the environment. – Margaret Mead",
    // 4
    "What we are doing to the forests of the world is but a mirror reflection of what we are doing to ourselves and to one another. – Mahatma Gandhi",
    // 5
    "The environment is not a luxury; it is a necessity. – Anonymous",
    // 6
    "In nature, nothing exists alone. – Rachel Carson",
    // 7
    "The Earth is what we all have in common. – Wendell Berry",
    // 8
    "We do not inherit the Earth from our ancestors, we borrow it from our children. – Native American Proverb",
    // 9
    "The greatest threat to our planet is the belief that someone else will save it. – Robert Swan",
    // 10
    "The climate is changing and we must change with it. – Anonymous",
    // 11
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 12
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. – Charles Darwin",
    // 13
    "The Earth provides enough to satisfy every man’s needs, but not every man’s greed. – Mahatma Gandhi",
    // 14
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 15
    "We have a single mission: to protect and hand on the planet to the next generation. – François Hollande",
    // 16
    "He that plants trees loves others besides himself. – Thomas Fuller",
    // 17
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 18
    "The Earth is a fine place and worth fighting for. – Ernest Hemingway",
    // 19
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 20
    "The Earth has music for those who listen. – William Shakespeare",
    // 21
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 22
    "Nature is not a place to visit. It is home. – Gary Snyder",
    // 23
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 24
    "The Earth does not belong to us: we belong to the Earth. – Marlee Matlin",
    // 25
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 26
    "Nature does not hurry, yet everything is accomplished. – Lao Tzu",
    // 27
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 28
    "We won’t have a society if we destroy the environment. – Margaret Mead",
    // 29
    "The Earth does not belong to us: we belong to the Earth. – Marlee Matlin",
    // 30
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 31
    "The Earth is what we all have in common. – Wendell Berry",
    // 32
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 33
    "The greatest threat to our planet is the belief that someone else will save it. – Robert Swan",
    // 34
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 35
    "The climate is changing and we must change with it. – Anonymous",
    // 36
    "We do not inherit the Earth from our ancestors, we borrow it from our children. – Native American Proverb",
    // 37
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 38
    "The Earth is what we all have in common. – Wendell Berry",
    // 39
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 40
    "The greatest threat to our planet is the belief that someone else will save it. – Robert Swan",
    // 41
    "We won’t have a society if we destroy the environment. – Margaret Mead",
    // 42
    "The Earth provides enough to satisfy every man’s needs, but not every man’s greed. – Mahatma Gandhi",
    // 43
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 44
    "We have a single mission: to protect and hand on the planet to the next generation. – François Hollande",
    // 45
    "He that plants trees loves others besides himself. – Thomas Fuller",
    // 46
    "The Earth is a fine place and worth fighting for. – Ernest Hemingway",
    // 47
    "The Earth has music for those who listen. – William Shakespeare",
    // 48
    "Nature is not a place to visit. It is home. – Gary Snyder",
    // 49
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 50
    "Nature does not hurry, yet everything is accomplished. – Lao Tzu",
    // 51
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 52
    "The Earth is a fine place and worth fighting for. – Ernest Hemingway",
    // 53
    "The greatest threat to our planet is the belief that someone else will save it. – Robert Swan",
    // 54
    "We won’t have a society if we destroy the environment. – Margaret Mead",
    // 55
    "The Earth does not belong to us: we belong to the Earth. – Marlee Matlin",
    // 56
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 57
    "We do not inherit the Earth from our ancestors, we borrow it from our children. – Native American Proverb",
    // 58
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 59
    "The Earth is what we all have in common. – Wendell Berry",
    // 60
    "The greatest threat to our planet is the belief that someone else will save it. – Robert Swan",
    // 61
    "The climate is changing and we must change with it. – Anonymous",
    // 62
    "The Earth is what we all have in common. – Wendell Berry",
    // 63
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 64
    "The greatest threat to our planet is the belief that someone else will save it. – Robert Swan",
    // 65
    "The Earth provides enough to satisfy every man’s needs, but not every man’s greed. – Mahatma Gandhi",
    // 66
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 67
    "We have a single mission: to protect and hand on the planet to the next generation. – François Hollande",
    // 68
    "He that plants trees loves others besides himself. – Thomas Fuller",
    // 69
    "The Earth is a fine place and worth fighting for. – Ernest Hemingway",
    // 70
    "The Earth has music for those who listen. – William Shakespeare",
    // 71
    "Nature is not a place to visit. It is home. – Gary Snyder",
    // 72
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 73
    "Nature does not hurry, yet everything is accomplished. – Lao Tzu",
    // 74
    "The Earth is a fine place and worth fighting for. – Ernest Hemingway",
    // 75
    "The greatest threat to our planet is the belief that someone else will save it. – Robert Swan",
    // 76
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 77
    "The Earth does not belong to us: we belong to the Earth. – Marlee Matlin",
    // 78
    "We do not inherit the Earth from our ancestors, we borrow it from our children. – Native American Proverb",
    // 79
    "The Earth is what we all have in common. – Wendell Berry",
    // 80
    "The climate is changing and we must change with it. – Anonymous",
    // 81
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 82
    "Nature is not a place to visit. It is home. – Gary Snyder",
    // 83
    "The Earth is a fine place and worth fighting for. – Ernest Hemingway",
    // 84
    "The greatest threat to our planet is the belief that someone else will save it. – Robert Swan",
    // 85
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 86
    "The Earth provides enough to satisfy every man’s needs, but not every man’s greed. – Mahatma Gandhi",
    // 87
    "The Earth is what we all have in common. – Wendell Berry",
    // 88
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 89
    "Nature does not hurry, yet everything is accomplished. – Lao Tzu",
    // 90
    "The Earth has music for those who listen. – William Shakespeare",
    // 91
    "The greatest threat to our planet is the belief that someone else will save it. – Robert Swan",
    // 92
    "The environment is where we all meet, where we all have a mutual interest; it is the one thing all of us share. – Lady Bird Johnson",
    // 93
    "We won’t have a society if we destroy the environment. – Margaret Mead",
    // 94
    "We have a single mission: to protect and hand on the planet to the next generation. – François Hollande",
    // 95
    "He that plants trees loves others besides himself. – Thomas Fuller",
    // 96
    "The Earth is a fine place and worth fighting for. – Ernest Hemingway",
    // 97
    "Nature is not a place to visit. It is home. – Gary Snyder",
    // 98
    "The greatest threat to our planet is the belief that someone else will save it. – Robert Swan",
    // 99
    "The climate is changing and we must change with it. – Anonymous",
    // 100
    "We do not inherit the Earth from our ancestors, we borrow it from our children. – Native American Proverb"
    ],

    "Political Quotes": [
    // 1
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    // 2
    "In a democracy, the people get the government they deserve. – Alexis de Tocqueville",
    // 3
    "The power of the people is greater than the people in power. – Wael Ghonim",
    // 4
    "The most dangerous thing in the world is a leader with no vision. – Anonymous",
    // 5
    "The greatest threat to freedom is the absence of criticism. – Wole Soyinka",
    // 6
    "Politics is not a game. It is an earnest business. – Winston Churchill",
    // 7
    "The best argument against democracy is a five-minute conversation with the average voter. – Winston Churchill",
    // 8
    "A government that robs Peter to pay Paul can always depend on the support of Paul. – George Bernard Shaw",
    // 9
    "We must adjust to changing times and still hold to unchanging principles. – Jimmy Carter",
    // 10
    "The price of greatness is responsibility. – Winston Churchill",
    // 11
    "The harder the conflict, the greater the triumph. – George Washington",
    // 12
    "In politics, stupidity is not a handicap. – Napoleon Bonaparte",
    // 13
    "The most successful politicians are those who are able to make the most of the least. – Anonymous",
    // 14
    "The function of leadership is to produce more leaders, not more followers. – Ralph Nader",
    // 15
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. – Charles Darwin",
    // 16
    "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. – Albert Camus",
    // 17
    "The greatest enemy of a good plan is the dream of a perfect plan. – Karl Popper",
    // 18
    "Those who cannot remember the past are condemned to repeat it. – George Santayana",
    // 19
    "Power tends to corrupt, and absolute power corrupts absolutely. – Lord Acton",
    // 20
    "The world is governed by those who do not have the courage to act. – Anonymous",
    // 21
    "The best way to predict your future is to create it. – Peter Drucker",
    // 22
    "The most common way people give up their power is by thinking they don’t have any. – Alice Walker",
    // 23
    "Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly, and applying the wrong remedies. – Groucho Marx",
    // 24
    "The greatest threat to democracy is the absence of dissent. – Anonymous",
    // 25
    "If you want to make enemies, try to change something. – Woodrow Wilson",
    // 26
    "An investment in knowledge pays the best interest. – Benjamin Franklin",
    // 27
    "The most effective way to destroy people is to deny and obliterate their own understanding of their history. – George Orwell",
    // 28
    "Political power grows out of the barrel of a gun. – Mao Zedong",
    // 29
    "The art of leadership is saying no, not yes. It is very easy to say yes. – Tony Blair",
    // 30
    "The history of the world is the record of the triumphs of those who dared to assert their own vision and to act on it. – Anonymous",
    // 31
    "The challenge of modernity is to live without illusions and without becoming disillusioned. – Antonio Gramsci",
    // 32
    "You can’t make an omelet without breaking eggs. – Georges Danton",
    // 33
    "If you are not at the table, you are on the menu. – Anonymous",
    // 34
    "A leader is a dealer in hope. – Napoleon Bonaparte",
    // 35
    "The first duty of a man is to think for himself. – José Martí",
    // 36
    "All that is necessary for the triumph of evil is that good men do nothing. – Edmund Burke",
    // 37
    "The best way to make a revolution is to be a leader. – Anonymous",
    // 38
    "The test of a first-rate intelligence is the ability to hold two opposing ideas in mind at the same time and still retain the ability to function. – F. Scott Fitzgerald",
    // 39
    "It is not enough to be right; we must be able to influence others to adopt our vision. – Anonymous",
    // 40
    "The secret of political wisdom is to know the right time to say nothing. – Anonymous",
    // 41
    "To be a great leader, you must be a great follower first. – Anonymous",
    // 42
    "In politics, if you want anything said, ask a man; if you want anything done, ask a woman. – Margaret Thatcher",
    // 43
    "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. – Albert Camus",
    // 44
    "The future belongs to those who prepare for it today. – Malcolm X",
    // 45
    "The only real prison is fear, and the only real freedom is freedom from fear. – Aung San Suu Kyi",
    // 46
    "Political power grows out of the barrel of a gun. – Mao Zedong",
    // 47
    "If you want something said, ask a man; if you want something done, ask a woman. – Margaret Thatcher",
    // 48
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. – Charles Darwin",
    // 49
    "The most common way people give up their power is by thinking they don’t have any. – Alice Walker",
    // 50
    "The price of greatness is responsibility. – Winston Churchill",
    // 51
    "To improve is to change; to be perfect is to change often. – Winston Churchill",
    // 52
    "A government that robs Peter to pay Paul can always depend on the support of Paul. – George Bernard Shaw",
    // 53
    "The only thing we have to fear is fear itself. – Franklin D. Roosevelt",
    // 54
    "In a democracy, the people get the government they deserve. – Alexis de Tocqueville",
    // 55
    "The power of the people is greater than the people in power. – Wael Ghonim",
    // 56
    "The most dangerous thing in the world is a leader with no vision. – Anonymous",
    // 57
    "The greatest threat to freedom is the absence of criticism. – Wole Soyinka",
    // 58
    "Politics is not a game. It is an earnest business. – Winston Churchill",
    // 59
    "The best argument against democracy is a five-minute conversation with the average voter. – Winston Churchill",
    // 60
    "A government that robs Peter to pay Paul can always depend on the support of Paul. – George Bernard Shaw",
    // 61
    "We must adjust to changing times and still hold to unchanging principles. – Jimmy Carter",
    // 62
    "The price of greatness is responsibility. – Winston Churchill",
    // 63
    "The harder the conflict, the greater the triumph. – George Washington",
    // 64
    "In politics, stupidity is not a handicap. – Napoleon Bonaparte",
    // 65
    "The most successful politicians are those who are able to make the most of the least. – Anonymous",
    // 66
    "The function of leadership is to produce more leaders, not more followers. – Ralph Nader",
    // 67
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. – Charles Darwin",
    // 68
    "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. – Albert Camus",
    // 69
    "The greatest enemy of a good plan is the dream of a perfect plan. – Karl Popper",
    // 70
    "Those who cannot remember the past are condemned to repeat it. – George Santayana",
    // 71
    "Power tends to corrupt, and absolute power corrupts absolutely. – Lord Acton",
    // 72
    "The world is governed by those who do not have the courage to act. – Anonymous",
    // 73
    "The best way to predict your future is to create it. – Peter Drucker",
    // 74
    "The most common way people give up their power is by thinking they don’t have any. – Alice Walker",
    // 75
    "Politics is the art of looking for trouble, finding it everywhere, diagnosing it incorrectly, and applying the wrong remedies. – Groucho Marx",
    // 76
    "The greatest threat to democracy is the absence of dissent. – Anonymous",
    // 77
    "If you want to make enemies, try to change something. – Woodrow Wilson",
    // 78
    "An investment in knowledge pays the best interest. – Benjamin Franklin",
    // 79
    "The most effective way to destroy people is to deny and obliterate their own understanding of their history. – George Orwell",
    // 80
    "Political power grows out of the barrel of a gun. – Mao Zedong",
    // 81
    "The art of leadership is saying no, not yes. It is very easy to say yes. – Tony Blair",
    // 82
    "The history of the world is the record of the triumphs of those who dared to assert their own vision and to act on it. – Anonymous",
    // 83
    "The challenge of modernity is to live without illusions and without becoming disillusioned. – Antonio Gramsci",
    // 84
    "You can’t make an omelet without breaking eggs. – Georges Danton",
    // 85
    "If you are not at the table, you are on the menu. – Anonymous",
    // 86
    "A leader is a dealer in hope. – Napoleon Bonaparte",
    // 87
    "The first duty of a man is to think for himself. – José Martí",
    // 88
    "All that is necessary for the triumph of evil is that good men do nothing. – Edmund Burke",
    // 89
    "The best way to make a revolution is to be a leader. – Anonymous",
    // 90
    "The test of a first-rate intelligence is the ability to hold two opposing ideas in mind at the same time and still retain the ability to function. – F. Scott Fitzgerald",
    // 91
    "It is not enough to be right; we must be able to influence others to adopt our vision. – Anonymous",
    // 92
    "The secret of political wisdom is to know the right time to say nothing. – Anonymous",
    // 93
    "To be a great leader, you must be a great follower first. – Anonymous",
    // 94
    "In politics, if you want anything said, ask a man; if you want anything done, ask a woman. – Margaret Thatcher",
    // 95
    "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion. – Albert Camus",
    // 96
    "The future belongs to those who prepare for it today. – Malcolm X",
    // 97
    "The only real prison is fear, and the only real freedom is freedom from fear. – Aung San Suu Kyi",
    // 98
    "Political power grows out of the barrel of a gun. – Mao Zedong",
    // 99
    "If you want something said, ask a man; if you want something done, ask a woman. – Margaret Thatcher",
    // 100
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change. – Charles Darwin"
    ],

    "Family Quotes": [
    // 1
    "Family is not an important thing, it’s everything. – Michael J. Fox",
    // 2
    "The love of a family is life’s greatest blessing. – Anonymous",
    // 3
    "Family is where life begins and love never ends. – Anonymous",
    // 4
    "The family is one of nature’s masterpieces. – George Santayana",
    // 5
    "Family means no one gets left behind or forgotten. – David Ogden Stiers",
    // 6
    "Family is the most important thing in the world. – Princess Diana",
    // 7
    "A family is a place where minds come in contact with one another. – Buddha",
    // 8
    "The most important thing in the world is family and love. – John Wooden",
    // 9
    "Family is like music, some high notes, some low notes, but always a beautiful song. – Anonymous",
    // 10
    "Family is the heart of a home. – Anonymous",
    // 11
    "In time of test, family is best. – Burmese Proverb",
    // 12
    "Family is a life jacket in the stormy sea of life. – Anonymous",
    // 13
    "A happy family is but an earlier heaven. – George Bernard Shaw",
    // 14
    "Family is the compass that guides us; it’s the map we follow. – Anonymous",
    // 15
    "Family is where we are all born and where we find our true selves. – Anonymous",
    // 16
    "Family is the best kind of friends. – Anonymous",
    // 17
    "The love of family and the admiration of friends is much more important than wealth and privilege. – Charles Kuralt",
    // 18
    "The bond that links your true family is not one of blood, but of respect and joy in each other’s life. – Richard Bach",
    // 19
    "Family is the foundation of our lives. – Anonymous",
    // 20
    "Family is a gift that lasts forever. – Anonymous",
    // 21
    "Family is the anchor that holds us through life’s storms. – Anonymous",
    // 22
    "The strength of a family, like the strength of an army, is in its loyalty to each other. – Mario Puzo",
    // 23
    "Family is a little world created by love. – Anonymous",
    // 24
    "Family is not an important thing; it is everything. – Michael J. Fox",
    // 25
    "The love of family and the admiration of friends is much more important than wealth and privilege. – Charles Kuralt",
    // 26
    "Family is the most important thing in the world. – Princess Diana",
    // 27
    "Family is a place where minds come in contact with one another. – Buddha",
    // 28
    "A family is a gift that lasts forever. – Anonymous",
    // 29
    "Family is the anchor that holds us through life’s storms. – Anonymous",
    // 30
    "Family is a little world created by love. – Anonymous",
    // 31
    "Family is where we are all born and where we find our true selves. – Anonymous",
    // 32
    "Family is the heart of a home. – Anonymous",
    // 33
    "In time of test, family is best. – Burmese Proverb",
    // 34
    "Family means no one gets left behind or forgotten. – David Ogden Stiers",
    // 35
    "Family is the best kind of friends. – Anonymous",
    // 36
    "The bond that links your true family is not one of blood, but of respect and joy in each other’s life. – Richard Bach",
    // 37
    "Family is the foundation of our lives. – Anonymous",
    // 38
    "The love of a family is life’s greatest blessing. – Anonymous",
    // 39
    "A happy family is but an earlier heaven. – George Bernard Shaw",
    // 40
    "Family is like music, some high notes, some low notes, but always a beautiful song. – Anonymous",
    // 41
    "Family is where life begins and love never ends. – Anonymous",
    // 42
    "The family is one of nature’s masterpieces. – George Santayana",
    // 43
    "Family is the most important thing in the world. – Princess Diana",
    // 44
    "Family is not an important thing; it is everything. – Michael J. Fox",
    // 45
    "Family is a place where minds come in contact with one another. – Buddha",
    // 46
    "The love of family and the admiration of friends is much more important than wealth and privilege. – Charles Kuralt",
    // 47
    "The bond that links your true family is not one of blood, but of respect and joy in each other’s life. – Richard Bach",
    // 48
    "Family is a life jacket in the stormy sea of life. – Anonymous",
    // 49
    "Family is where we are all born and where we find our true selves. – Anonymous",
    // 50
    "Family is a gift that lasts forever. – Anonymous",
    // 51
    "The love of a family is life’s greatest blessing. – Anonymous",
    // 52
    "Family is where life begins and love never ends. – Anonymous",
    // 53
    "The strength of a family, like the strength of an army, is in its loyalty to each other. – Mario Puzo",
    // 54
    "Family is a little world created by love. – Anonymous",
    // 55
    "In time of test, family is best. – Burmese Proverb",
    // 56
    "Family is the anchor that holds us through life’s storms. – Anonymous",
    // 57
    "A happy family is but an earlier heaven. – George Bernard Shaw",
    // 58
    "The most important thing in the world is family and love. – John Wooden",
    // 59
    "Family is the heart of a home. – Anonymous",
    // 60
    "The love of family and the admiration of friends is much more important than wealth and privilege. – Charles Kuralt",
    // 61
    "Family is a life jacket in the stormy sea of life. – Anonymous",
    // 62
    "A family is a gift that lasts forever. – Anonymous",
    // 63
    "Family is where we are all born and where we find our true selves. – Anonymous",
    // 64
    "Family is the best kind of friends. – Anonymous",
    // 65
    "The love of a family is life’s greatest blessing. – Anonymous",
    // 66
    "Family is where life begins and love never ends. – Anonymous",
    // 67
    "Family is a little world created by love. – Anonymous",
    // 68
    "The bond that links your true family is not one of blood, but of respect and joy in each other’s life. – Richard Bach",
    // 69
    "Family is the foundation of our lives. – Anonymous",
    // 70
    "The strength of a family, like the strength of an army, is in its loyalty to each other. – Mario Puzo",
    // 71
    "The most important thing in the world is family and love. – John Wooden",
    // 72
    "Family is a gift that lasts forever. – Anonymous",
    // 73
    "Family is where life begins and love never ends. – Anonymous",
    // 74
    "The love of family is life’s greatest blessing. – Anonymous",
    // 75
    "Family is the anchor that holds us through life’s storms. – Anonymous",
    // 76
    "A family is a place where minds come in contact with one another. – Buddha",
    // 77
    "The most important thing in the world is family and love. – John Wooden",
    // 78
    "Family is not an important thing, it’s everything. – Michael J. Fox",
    // 79
    "Family is the heart of a home. – Anonymous",
    // 80
    "Family is where we are all born and where we find our true selves. – Anonymous",
    // 81
    "In time of test, family is best. – Burmese Proverb",
    // 82
    "The bond that links your true family is not one of blood, but of respect and joy in each other’s life. – Richard Bach",
    // 83
    "Family is like music, some high notes, some low notes, but always a beautiful song. – Anonymous",
    // 84
    "Family is the most important thing in the world. – Princess Diana",
    // 85
    "The strength of a family, like the strength of an army, is in its loyalty to each other. – Mario Puzo",
    // 86
    "Family is a life jacket in the stormy sea of life. – Anonymous",
    // 87
    "The love of family and the admiration of friends is much more important than wealth and privilege. – Charles Kuralt",
    // 88
    "Family is a little world created by love. – Anonymous",
    // 89
    "A happy family is but an earlier heaven. – George Bernard Shaw",
    // 90
    "The most important thing in the world is family and love. – John Wooden",
    // 91
    "Family is where life begins and love never ends. – Anonymous",
    // 92
    "The bond that links your true family is not one of blood, but of respect and joy in each other’s life. – Richard Bach",
    // 93
    "Family is the heart of a home. – Anonymous",
    // 94
    "In time of test, family is best. – Burmese Proverb",
    // 95
    "Family is not an important thing; it is everything. – Michael J. Fox",
    // 96
    "The love of family is life’s greatest blessing. – Anonymous",
    // 97
    "Family is where we are all born and where we find our true selves. – Anonymous",
    // 98
    "Family is the most important thing in the world. – Princess Diana",
    // 99
    "The strength of a family, like the strength of an army, is in its loyalty to each other. – Mario Puzo",
    // 100
    "The love of a family is life’s greatest blessing. – Anonymous"
    ],

    "Anime Quotes": [
    // 1
    "It's not the face that makes someone a monster; it's the choices they make with their lives. – Naruto Uzumaki, Naruto",
    // 2
    "The moment you think of giving up, think of the reason why you held on so long. – Natsu Dragneel, Fairy Tail",
    // 3
    "A lesson without pain is meaningless. For no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart. – Edward Elric, Fullmetal Alchemist: Brotherhood",
    // 4
    "The world isn’t perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 5
    "People’s lives don’t end when they die, it ends when they lose faith. – Itachi Uchiha, Naruto",
    // 6
    "No matter how deep the night, it always turns to day, eventually. – Brook, One Piece",
    // 7
    "A person grows up when he’s able to overcome hardships. – Luffy, One Piece",
    // 8
    "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be. – Naruto Uzumaki, Naruto",
    // 9
    "I don’t want to just survive. I want to live. – Kaneki Ken, Tokyo Ghoul",
    // 10
    "The moment you think of giving up, think of the reason why you held on so long. – Natsu Dragneel, Fairy Tail",
    // 11
    "The world is not perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 12
    "You should enjoy the little detours. Perhaps they will turn out to be the most important parts of your life. – Anonymous",
    // 13
    "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have. – Matsumoto Rangiku, Bleach",
    // 14
    "It’s not the face that makes someone a monster; it’s the choices they make with their lives. – Naruto Uzumaki, Naruto",
    // 15
    "When you have to save someone, you need to be more prepared than usual. – Luffy, One Piece",
    // 16
    "When you have to save someone, you need to be more prepared than usual. – Luffy, One Piece",
    // 17
    "The world is not perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 18
    "A person’s worth is measured by the worth of what he values. – Anonymous",
    // 19
    "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be. – Naruto Uzumaki, Naruto",
    // 20
    "The moment you think of giving up, think of the reason why you held on so long. – Natsu Dragneel, Fairy Tail",
    // 21
    "The world is full of nice people. If you can’t find one, be one. – Anonymous",
    // 22
    "A lesson without pain is meaningless. For no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart. – Edward Elric, Fullmetal Alchemist: Brotherhood",
    // 23
    "A person grows up when he’s able to overcome hardships. – Luffy, One Piece",
    // 24
    "People’s lives don’t end when they die, it ends when they lose faith. – Itachi Uchiha, Naruto",
    // 25
    "The moment you think of giving up, think of the reason why you held on so long. – Natsu Dragneel, Fairy Tail",
    // 26
    "The world isn’t perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 27
    "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be. – Naruto Uzumaki, Naruto",
    // 28
    "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have. – Matsumoto Rangiku, Bleach",
    // 29
    "The world isn’t perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 30
    "The world isn’t perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 31
    "When you have to save someone, you need to be more prepared than usual. – Luffy, One Piece",
    // 32
    "A person’s worth is measured by the worth of what he values. – Anonymous",
    // 33
    "It’s not the face that makes someone a monster; it’s the choices they make with their lives. – Naruto Uzumaki, Naruto",
    // 34
    "The love of a family is life’s greatest blessing. – Anonymous",
    // 35
    "Family is where life begins and love never ends. – Anonymous",
    // 36
    "The world isn’t perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 37
    "A person’s worth is measured by the worth of what he values. – Anonymous",
    // 38
    "The moment you think of giving up, think of the reason why you held on so long. – Natsu Dragneel, Fairy Tail",
    // 39
    "People’s lives don’t end when they die, it ends when they lose faith. – Itachi Uchiha, Naruto",
    // 40
    "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have. – Matsumoto Rangiku, Bleach",
    // 41
    "It’s not the face that makes someone a monster; it’s the choices they make with their lives. – Naruto Uzumaki, Naruto",
    // 42
    "The moment you think of giving up, think of the reason why you held on so long. – Natsu Dragneel, Fairy Tail",
    // 43
    "The world is full of nice people. If you can’t find one, be one. – Anonymous",
    // 44
    "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be. – Naruto Uzumaki, Naruto",
    // 45
    "A lesson without pain is meaningless. For no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart. – Edward Elric, Fullmetal Alchemist: Brotherhood",
    // 46
    "Family is where life begins and love never ends. – Anonymous",
    // 47
    "When you have to save someone, you need to be more prepared than usual. – Luffy, One Piece",
    // 48
    "The moment you think of giving up, think of the reason why you held on so long. – Natsu Dragneel, Fairy Tail",
    // 49
    "The world is not perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 50
    "A person’s worth is measured by the worth of what he values. – Anonymous",
    // 51
    "People’s lives don’t end when they die, it ends when they lose faith. – Itachi Uchiha, Naruto",
    // 52
    "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have. – Matsumoto Rangiku, Bleach",
    // 53
    "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be. – Naruto Uzumaki, Naruto",
    // 54
    "The world isn’t perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 55
    "The world is full of nice people. If you can’t find one, be one. – Anonymous",
    // 56
    "When you have to save someone, you need to be more prepared than usual. – Luffy, One Piece",
    // 57
    "A lesson without pain is meaningless. For no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart. – Edward Elric, Fullmetal Alchemist: Brotherhood",
    // 58
    "The love of a family is life’s greatest blessing. – Anonymous",
    // 59
    "Family is where life begins and love never ends. – Anonymous",
    // 60
    "The world isn’t perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 61
    "A person’s worth is measured by the worth of what he values. – Anonymous",
    // 62
    "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have. – Matsumoto Rangiku, Bleach",
    // 63
    "The world is full of nice people. If you can’t find one, be one. – Anonymous",
    // 64
    "If you don’t like your destiny, don’t accept it. Instead, have the courage to change it the way you want it to be. – Naruto Uzumaki, Naruto",
    // 65
    "The moment you think of giving up, think of the reason why you held on so long. – Natsu Dragneel, Fairy Tail",
    // 66
    "When you have to save someone, you need to be more prepared than usual. – Luffy, One Piece",
    // 67
    "A lesson without pain is meaningless. For no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart. – Edward Elric, Fullmetal Alchemist: Brotherhood",
    // 68
    "The love of a family is life’s greatest blessing. – Anonymous",
    // 69
    "Family is where life begins and love never ends. – Anonymous",
    // 70
    "The world isn’t perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 71
    "The world is full of nice people. If you can’t find one, be one. – Anonymous",
    // 72
    "A person’s worth is measured by the worth of what he values. – Anonymous",
    // 73
    "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have. – Matsumoto Rangiku, Bleach",
    // 74
    "The moment you think of giving up, think of the reason why you held on so long. – Natsu Dragneel, Fairy Tail",
    // 75
    "The world is not perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 76
    "A lesson without pain is meaningless. For no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart. – Edward Elric, Fullmetal Alchemist: Brotherhood",
    // 77
    "The love of a family is life’s greatest blessing. – Anonymous",
    // 78
    "Family is where life begins and love never ends. – Anonymous",
    // 79
    "When you have to save someone, you need to be more prepared than usual. – Luffy, One Piece",
    // 80
    "The moment you think of giving up, think of the reason why you held on so long. – Natsu Dragneel, Fairy Tail",
    // 81
    "The world isn’t perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 82
    "A person’s worth is measured by the worth of what he values. – Anonymous",
    // 83
    "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have. – Matsumoto Rangiku, Bleach",
    // 84
    "The world is full of nice people. If you can’t find one, be one. – Anonymous",
    // 85
    "The love of a family is life’s greatest blessing. – Anonymous",
    // 86
    "Family is where life begins and love never ends. – Anonymous",
    // 87
    "A lesson without pain is meaningless. For no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart. – Edward Elric, Fullmetal Alchemist: Brotherhood",
    // 88
    "When you have to save someone, you need to be more prepared than usual. – Luffy, One Piece",
    // 89
    "The world is not perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 90
    "A person’s worth is measured by the worth of what he values. – Anonymous",
    // 91
    "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have. – Matsumoto Rangiku, Bleach",
    // 92
    "The world is full of nice people. If you can’t find one, be one. – Anonymous",
    // 93
    "The moment you think of giving up, think of the reason why you held on so long. – Natsu Dragneel, Fairy Tail",
    // 94
    "The world isn’t perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 95
    "A lesson without pain is meaningless. For no one can gain without sacrificing something. But by enduring that pain and overcoming it, he shall obtain a powerful, unmatched heart. – Edward Elric, Fullmetal Alchemist: Brotherhood",
    // 96
    "Family is where life begins and love never ends. – Anonymous",
    // 97
    "When you have to save someone, you need to be more prepared than usual. – Luffy, One Piece",
    // 98
    "The love of a family is life’s greatest blessing. – Anonymous",
    // 99
    "The world is not perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful. – Hiromu Arakawa, Fullmetal Alchemist: Brotherhood",
    // 100
    "A person’s worth is measured by the worth of what he values. – Anonymous"
    ]
};

// Variable to store the currently displayed quote
let currentQuote = ''; 

// Variable to track whether the current quote is liked
let isQuoteLiked = false; 

/**
 * Get a random quote from the available quotes, excluding quotes already liked.
 * @param {Array} categoryQuotes - List of quotes for the selected category.
 * @param {Array} excludedQuotes - List of quotes to exclude (e.g., favorites).
 * @returns {string|null} - A random quote or null if no quotes are available.
 */
function getRandomQuote(categoryQuotes, excludedQuotes) {
    const availableQuotes = categoryQuotes.filter(quote => !excludedQuotes.includes(quote));
    if (availableQuotes.length === 0) {
        return null; 
    }
    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    return availableQuotes[randomIndex];
}

/**
 * Retrieve user-submitted quotes from localStorage.
 * @returns {Object} - An object containing user quotes categorized by type.
 */
function getUserQuotes() {
    return JSON.parse(localStorage.getItem('userQuotes')) || {};
}

/**
 * Display a random quote based on the selected category and update button states.
 */
function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const categoryFilter = document.getElementById('category-filter');
    const copyButton = document.getElementById('copy-button');
    const likeButton = document.getElementById('like-button');
    const readAloudButton = document.getElementById('read-aloud-button');
    const selectedCategory = categoryFilter.value;

    // Check if a category is selected
    if (selectedCategory === "") {
        quoteElement.textContent = "Please select a category.";
        copyButton.disabled = true;
        likeButton.disabled = true;
        readAloudButton.disabled = true;
        return;
    }

    const categoryQuotes = quotes[selectedCategory] || [];
    const userQuotes = getUserQuotes()[selectedCategory] || [];
    const allQuotes = [...categoryQuotes, ...userQuotes];
    // Check if there are any quotes to display
    if (allQuotes.length === 0) {
        quoteElement.textContent = "No quotes available for this category.";
        copyButton.disabled = true;
        likeButton.disabled = true;
        readAloudButton.disabled = true; 
        return;
    }

    const excludedQuotes = JSON.parse(localStorage.getItem('favorites')) || [];
    const newQuote = getRandomQuote(allQuotes, excludedQuotes);

    // Check if a new quote was successfully retrieved
    if (!newQuote) {
        quoteElement.textContent = "No quotes available for this category.";
        copyButton.disabled = true;
        likeButton.disabled = true;
        readAloudButton.disabled = true;
        return;
    }

    // Update the UI with the new quote and button states
    currentQuote = newQuote;
    quoteElement.textContent = currentQuote;
    copyButton.disabled = false;
    copyButton.querySelector('i').classList.remove('fa-check');
    copyButton.querySelector('i').classList.add('fa-copy'); 
    
    // Update like button state based on whether the quote is already liked
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    isQuoteLiked = favorites.includes(currentQuote);
    likeButton.disabled = false;
    likeButton.querySelector('i').classList.toggle('fa-heart-broken', !isQuoteLiked);
    likeButton.querySelector('i').classList.toggle('fa-heart', isQuoteLiked);

    readAloudButton.disabled = false; 
}

/**
 * Copy the displayed quote to the clipboard and update the copy button state.
 */
function copyQuote() {
    const quoteElement = document.getElementById('quote');
    const copyButton = document.getElementById('copy-button');
    const quoteText = quoteElement.textContent;

    // Avoid copying if no valid quote is displayed
    if (quoteText === "Select a category and click the button to see a quote!" ||
        quoteText === "Please select a category." ||
        quoteText === "No quotes available for this category.") {
        return;
    }

    navigator.clipboard.writeText(quoteText).then(() => {
        copyButton.querySelector('i').classList.remove('fa-copy');
        copyButton.querySelector('i').classList.add('fa-check'); 
        copyButton.disabled = true; 
        copyButton.setAttribute('data-copied', 'true'); 
    }).catch(err => {
        console.error("Failed to copy quote: ", err);
    });
}

/**
 * Read the displayed quote aloud using the Web Speech API and animate the read-aloud button.
 */
function readAloud() {
    const quoteElement = document.getElementById('quote');
    const quoteText = quoteElement.textContent;
    const readAloudButton = document.getElementById('read-aloud-button');

    // Avoid reading aloud if no valid quote is displayed
    if (quoteText === "Select a category and click the button to see a quote!" ||
        quoteText === "Please select a category." ||
        quoteText === "No quotes available for this category.") {
        return;
    }

    const utterance = new SpeechSynthesisUtterance(quoteText);
    
    // Add class to start animation
    readAloudButton.classList.add('active');
    
    // Remove class once the speech is finished
    utterance.onend = () => {
        readAloudButton.classList.remove('active');
    };

    window.speechSynthesis.speak(utterance);
}

/**
 * Like the displayed quote and update the like button state.
 */
function likeQuote() {
    if (!currentQuote || isQuoteLiked) return;
    
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(currentQuote)) {
        favorites.push(currentQuote);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        isQuoteLiked = true; 
        const likeButton = document.getElementById('like-button');
        likeButton.querySelector('i').classList.remove('fa-heart-broken');
        likeButton.querySelector('i').classList.add('fa-heart');
        likeButton.disabled = true; 
    }
}
