import { RoundImage } from '../../Components/RoundImage'
import { getCouples } from '../../CouplesData'
import { truncateText } from '../../Utiles'
import { LoveStoryDialog } from './LoveStoryDialog'


const brideStory = "I have never known Wilson before until when I was admitted into JETS college of education, Jos in the year 2016. During my stay in the school, Gloria Sunday (late😭) was the only person I knew as a friend. One faithful day, when I was about to go into the class, not knowing that the young man (Willy) was admiring the beautiful demsel 😍😍. He couldn’t come to me face to face to unvail what he feels for me, so he used my friend Glory(late😓) as a medium to get in contact with me. When she told me, I just smiled☺️☺️because it came as a surprise to me. The next day, I was about going to the market, guess who I saw at our door 😳 💁, behold I saw Wilson, after an exchange of pleasantries guess what he said 🙆, “please can you get me some tomatoes and shombo when coming back from the market”. As beautiful 😍😍and obedient as I am, I humbly bought what he asked me to buy. As time went on, he kept on coming, sometimes we meet at chapel band rehearsals. As time went on, we became very good friends👫 as the friendship was on,prepared as a nice guy he wants to be😑😜, he bought NASARA BREAD and EGGS 😋which I was the one that prepares it when we got back to the hostel. After a while he asked me out (he revealed his feelings to me) as careful as I am, I refused 😉😉😎to give in to his request as he expected. When I got back home, I prayed🙏 about it… After all my thoughts, On the 17 October 2019 I accepted to be his girlfriend👩‍❤️‍👩 and that’s how the journey into the world 🌍of love 💝💝😍continue without fear or doubt… that’s how God continue to see us through the unlimited journey into the love world because with him, everything is possible. Aaahhhhhhhhhh¡ 😲😲😲!!!! Wily❣️ darling😍😍❣️❣️ don’t forget that NASARA BREAD and EGGS😋😋😋 I need it again and again💃💃"
const groomsStory = "The common tittle I gave LOVE is “Love Mugu.” Just when I did not realize I could fall in LOVE with a lady I so much disliked, LOVE taught me the opposite. She was just a lady filled with the fear of the unknown, well to me “tarbiya” has contributed to helping her, a lady loved by almost everyone such that I was afraid of been attacked by a rival because of her. With my love for music, I did not consider joining the JETS Chapel Band, until when I realized that Chapel band was going to be a meeting point… Sha, Debbie gave me tough time and at some points I felt it was the reward of the hatred I had for her. This story won’t make sense if I don’t include better friend like Gloria Sunday (late), keep resting with the Lord dear friend. Gloria was the channel I used to get this beautiful Girlie, though I became fade up with the ill treatment, but nothing wey this mugu (Love) cannot do ai… Jesus Himself was indebted to love talk more of Myself “Wheynom” (Son of God). I knew I was indebted to loving Debbie and that was why I did not trade that LOVE for anything.Amidst all the chara and whatever, I thought she was not going to accept fa, not until 17th October, 2019 when she said “YES” at a particular spot in school that I cannot forget at all. The journey continues… JETS Registrar, Mrs. Salome was just looking at these two LOVE birds and did not want to draw conclusions, Mummy Theresa Adamu the giver of the name “two LOVE birds”, Mr. Joel the secretary to the Registrar always asks “ina yan biyunka?” well, this describes how attached we are to each other because of how much LOVE we have for ourselves. Therefore; as Jesus will say “where your treasure is, there your heart will be.” (Matthew 6:21). For where Debbie is, there my heart is, and now see where it has landed us. The Journey was not easy but God has been faithful to us."



export const Couples = () => {
    const couples = getCouples()


    return (
        <div className='flex flex-col items-center' id='couple-story'>
            <div className="container my-10">

                <h1 className='text-center text-3xl font-mistletoe'>Happy Couple</h1>

                <div className='sm:flex justify-center'>
                    <div className='flex flex-col items-center mt-10'>
                        <RoundImage cicle_wh={250} backgroundImageUrl={couples.brideImage} />
                        <h3 className='text-center text-xl font-mistletoe pt-3'>{couples.brideFullname}</h3>
                        
                        {couples.brideLoveStoryTilte ? <div className='underline mt-3'>{couples.brideLoveStoryTilte}</div>:""}
                     
                        
                        {couples.brideLoveStory ?
                            <p className='text-center w-4/5'>
                                {truncateText(couples.brideLoveStory, 328)}
                                <br />
                                <LoveStoryDialog story={couples.brideLoveStory} img={'/images/couples/18.png'} />
                            </p> : ""
                        }

                    </div>
                    <div className='flex flex-col items-center mt-10'>
                        <RoundImage cicle_wh={250} backgroundImageUrl={couples.groomImage} />
                        <h3 className='text-center text-xl font-mistletoe pt-3'>{couples.groomFullname}</h3>
                        {couples.groomLoveStoryTilte ? <div className='underline mt-3'>{couples.groomLoveStoryTilte}</div>:""}
                        {couples.groomLoveStory ?
                            <p className='text-center w-4/5'>
                                {truncateText(couples.groomLoveStory, 328)}
                                <br />
                                <LoveStoryDialog story={couples.groomLoveStory} img={couples.groomImage} />
                            </p> : ""
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}
