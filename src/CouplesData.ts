export type Color = {
    TextColor?: string;
    BgColor?: string;
};
export type Celebration = {
    type?: string;
    address?: string;
};
export type Friends = {
    name?: string;
    role?: string;
    imageUrl?: string;
};

export type Images = {
    src: string;
    thumb: string;
    subHtml: string;
    category: string;
}
export type Couplesdata = {
    weddingDate: string;
    weddingColor: Color;
    couplesImageTog1?: string;
    couplesImageTog2?: string;
    couplesImageTog3?: string;

    // Brides Data
    brideName?: string;
    brideFullname?: string;
    brideLoveStoryTilte?: string,
    brideLoveStory?: string;
    brideImage: string;
    // Grooms Data
    groomName?: string;
    groomFullname?: string;
    groomLoveStoryTilte?: string,
    groomLoveStory?: string;
    groomImage: string;

    celebration?: Celebration[];
    bridesMaid?: Friends[];
    groomsMen?: Friends[];
    gallery?: Images[];

};



export const getCouples = (): Couplesdata => {
    // Placeholder implementation. You can update this to fetch actual data based on the key.
    return {
        weddingColor: { BgColor:"#85aaba", TextColor:"#ffffff"},
        brideName: "Emily",
        brideFullname: "Emily Davis Ogunleye",
        brideLoveStoryTilte: "A Café Connection ☕❤️",
        brideLoveStory: "It all started in a cozy café in Lagos. One rainy afternoon, I ducked into the café to escape the downpour 🌧️. As I sat down with my coffee, I noticed a man reading a book at the table next to mine. He looked up and smiled at me, his eyes warm and inviting 😊. That was Kelechi. We struck up a conversation about the book he was reading, and it turned out we had similar tastes in literature 📚. The rain outside created a perfect backdrop for our conversation, and time flew by as we shared stories and laughed together 😂. A week later, Kelechi invited me to a book reading event 📖. As we listened to the author speak, I felt a deep connection forming between us. His kindness and intelligence drew me in, and I realized I wanted to know him better. Our coffee dates became a regular thing ☕. Each meeting brought us closer, and Kelechi's genuine nature made me fall for him more each day. One evening, as we walked through a park 🌳, he held my hand and confessed his feelings. My heart soared, and I knew I felt the same way 💓. From that moment on, our relationship blossomed like a beautiful flower 🌸. Kelechi's love and support became my anchor, and I couldn't imagine my life without him. With every shared moment, our bond grew stronger, and I look forward to a lifetime of love and happiness with him by my side 🌟.",
        brideImage: "/images/couples/18.png",

        groomName: "Bayo",
        groomFullname: "Kelechi Bayo Obi",
        groomLoveStoryTilte: "Fate's Favorite Meeting Spot ☕✨",
        groomLoveStory: "It was a rainy afternoon in Lagos when fate brought Emily into my life. Seeking refuge from the rain 🌧️, I stepped into a cozy café, only to find her sitting at the table next to mine. Her presence was captivating, and I couldn't resist smiling at her 😊. We started talking about the book I was reading, and I was pleasantly surprised to discover our shared passion for literature 📚. The rain outside set the perfect mood for our conversation, and time seemed to stand still as we exchanged stories and laughter 😂. A week later, I invited Emily to a book reading event 📖. As we listened to the author's words, I felt an undeniable connection between us. Her intelligence and warmth drew me in, and I knew I wanted to spend more time with her. Our coffee dates soon became a cherished routine ☕. Each meeting deepened my feelings for her, and Emily's genuine nature made me fall in love with her more each day. One evening, as we strolled through a park 🌳, I mustered the courage to hold her hand and confess my feelings. To my delight, she felt the same way 💓. Our relationship blossomed like a flower 🌸, growing stronger with every shared moment. Emily's love and support have become my foundation, and I can't imagine my life without her. With each passing day, our bond deepens, and I look forward to a future filled with love and happiness by her side 🌟.",
        groomImage: "/images/couples/17.jpg",

        weddingDate: "2024-09-07T16:59:00",
        couplesImageTog1: "/images/couples/9.jpg",
        couplesImageTog2: "/images/couples/3.jpg",
        couplesImageTog3: "/images/couples/4.jpg",

        celebration: [
            { type: "Wedding Ceremony", address: "Saturday, 17th December, 2022, 10.00 AM ECWA Goodnews Church U/K, Television, Kaduna" },
            { type: "Reception Party", address: "Saturday, 17th December, 2022, 10.00 AM Time: Immediately after [Ceremony] ECWA Goodnews Church U/K, Television, Kaduna" }
        ],
        bridesMaid: [
            { name: 'Judith Godiya', role: 'little bride', imageUrl: '/images/maid/1.jpg' },
            { name: 'Jane Doe', role: 'maid of honor', imageUrl: '/images/maid/2.jpg' },
            { name: 'Mary Johnson', role: 'bridesmaid', imageUrl: '/images/maid/3.jpg' },
            { name: 'Emily Davis', role: 'bridesmaid', imageUrl: '/images/maid/4.jpg' },
            { name: 'Sophia Brown', role: 'bridesmaid', imageUrl: '/images/maid/5.jpg' },
            { name: 'Olivia Wilson', role: 'bridesmaid', imageUrl: '/images/maid/6.jpg' },
            { name: 'Bimpe Adebayo', role: 'bridesmaid', imageUrl: '/images/maid/10.jpg' },
            { name: 'Zainab Mohammed', role: 'bridesmaid', imageUrl: '/images/maid/16.jpg' },
            { name: 'Amaka Nwosu', role: 'bridesmaid', imageUrl: '/images/maid/17.jpg' },
            { name: 'Folake Adeyemi', role: 'bridesmaid', imageUrl: '/images/maid/19.jpg' },
            { name: 'Bola Salami', role: 'bridesmaid', imageUrl: '/images/maid/20.jpg' },
            { name: 'Titilayo Ogunleye', role: 'bridesmaid', imageUrl: '/images/maid/21.jpg' },
        ],
        groomsMen: [
            { name: 'Michael Williams', role: 'groomsman', imageUrl: '/images/groomsmen/4.jpg' },
            { name: 'James Okeke', role: 'best man', imageUrl: '/images/groomsmen/1.jpg' },
            { name: 'David Johnson', role: 'groomsman', imageUrl: '/images/groomsmen/3.jpg' },
            { name: 'Peter Brown', role: 'groomsman', imageUrl: '/images/groomsmen/5.jpg' },
            { name: 'Samuel Wilson', role: 'groomsman', imageUrl: '/images/groomsmen/6.jpg' },
            { name: 'Chidi Nwosu', role: 'groomsman', imageUrl: '/images/groomsmen/7.jpg' },
            { name: 'Emeka Okafor', role: 'groomsman', imageUrl: '/images/groomsmen/8.jpg' },
            { name: 'Ibrahim Musa', role: 'groomsman', imageUrl: '/images/groomsmen/9.jpg' },
            { name: 'Uche Eze', role: 'groomsman', imageUrl: '/images/groomsmen/10.jpg' },
            { name: 'Tunde Adebayo', role: 'groomsman', imageUrl: '/images/groomsmen/11.jpg' },
            { name: 'Kelechi Obi', role: 'groomsman', imageUrl: '/images/groomsmen/12.jpg' },
            { name: 'Bayo Adigun', role: 'groomsman', imageUrl: '/images/groomsmen/13.jpg' },
        ],

        gallery:[
            {
              src: '/images/couples/1.jpg',
              thumb: '/images/couples/1.jpg',
              subHtml: "<h4>Photo by - <a href='https://unsplash.com/@entrycube'>Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>",
              category: 'Engagement'
            },
            {
              src: '/images/couples/2.jpg',
              thumb: '/images/couples/2.jpg',
              subHtml: "<h4>Photo by - <a href='https://unsplash.com/@asoshiation'>Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>",
              category: 'Engagement'
            },
            {
              src: '/images/couples/3.jpg',
              thumb: '/images/couples/3.jpg',
              subHtml: "<h4>Photo by - <a href='https://unsplash.com/@katherine_xx11'>Katherine Gu </a></h4><p> For all those years we were alone and helpless.</p>",
              category: 'Engagement'
            },
            {
              src: '/images/couples/4.jpg',
              thumb: '/images/couples/4.jpg',
              subHtml: "<h4>Beautiful Engagement Moment</h4><p>Celebrating love and togetherness in a special location.</p>",
              category: 'Engagement'
            },
            {
              src: '/images/couples/5.jpg',
              thumb: '/images/couples/5.jpg',
              subHtml: "<h4>Romantic Pre-Wedding Shoot</h4><p>Capturing the essence of love before the big day.</p>",
              category: 'Pre-Wedding'
            },
            {
              src: '/images/couples/6.jpg',
              thumb: '/images/couples/6.jpg',
              subHtml: "<h4>Charming Engagement Session</h4><p>A beautiful moment captured in time.</p>",
              category: 'Engagement'
            },
            {
              src: '/images/couples/7.jpg',
              thumb: '/images/couples/7.jpg',
              subHtml: "<h4>Enchanting Pre-Wedding Photo</h4><p>Love is in the air as we prepare for the wedding.</p>",
              category: 'Pre-Wedding'
            },
            {
              src: '/images/couples/8.jpg',
              thumb: '/images/couples/8.jpg',
              subHtml: "<h4>Delightful Engagement Picture</h4><p>Sharing a special moment of joy and love.</p>",
              category: 'Pre-Wedding'
            },
            {
              src: '/images/couples/9.jpg',
              thumb: '/images/couples/9.jpg',
              subHtml: "<h4>Lovely Pre-Wedding Shot</h4><p>Celebrating our journey together before the wedding day.</p>",
              category: 'Pre-Wedding'
            },
            {
              src: '/images/couples/10.jpg',
              thumb: '/images/couples/10.jpg',
              subHtml: "<h4>Pre-Wedding Bliss</h4><p>A magical moment of love and happiness.</p>",
              category: 'Pre-Wedding'
            },
            {
              src: '/images/couples/11.jpg',
              thumb: '/images/couples/11.jpg',
              subHtml: "<h4>Pre-Wedding Magic</h4><p>Capturing the beauty of love before the wedding.</p>",
              category: 'Pre-Wedding'
            },
            {
              src: '/images/couples/12.jpg',
              thumb: '/images/couples/12.jpg',
              subHtml: "<h4>Pre-Wedding Joy</h4><p>Sharing a moment of pure happiness and love.</p>",
              category: 'Pre-Wedding'
            },
            {
              src: '/images/couples/13.jpg',
              thumb: '/images/couples/13.jpg',
              subHtml: "<h4>Pre-Wedding Delight</h4><p>Enjoying the moments leading up to our big day.</p>",
              category: 'Pre-Wedding'
            },
            {
              src: '/images/couples/14.jpg',
              thumb: '/images/couples/14.jpg',
              subHtml: "<h4>Pre-Wedding Love</h4><p>Celebrating our commitment to each other.</p>",
              category: 'Pre-Wedding'
            },
            {
              src: '/images/couples/15.jpg',
              thumb: '/images/couples/15.jpg',
              subHtml: "<h4>Pre-Wedding Romance</h4><p>Feeling the love as we get ready for our wedding day.</p>",
              category: 'Pre-Wedding'
            },
            {
              src: '/images/couples/16.jpg',
              thumb: '/images/couples/16.jpg',
              subHtml: "<h4>Pre-Wedding Happiness</h4><p>A beautiful moment to cherish forever.</p>",
              category: 'Pre-Wedding'
            },
            {
              src: '/images/couples/17.jpg',
              thumb: '/images/couples/17.jpg',
              subHtml: "<Groom</h4><p>Enjoying every moment before our wedding.</p>",
              category: 'Groom'
            },
            {
              src: '/images/couples/18.png',
              thumb: '/images/couples/18.png',
              subHtml: "<h4>Bride Dream</h4><p>Our love story captured beautifully.</p>",
              category: 'Bride'
            }
          ]

    };



};