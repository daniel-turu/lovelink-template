import { useCouples } from '../../Components/CouplesProvider'
import { RoundImage } from '../../Components/RoundImage'
import { truncateText } from '../../Utiles'
import { LoveStoryDialog } from './LoveStoryDialog'




export const Couples = () => {
    const couples = useCouples()


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
                                <LoveStoryDialog story={couples.brideLoveStory} img={couples.brideImage} />
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
