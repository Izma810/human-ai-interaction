import Head from 'next/head';

function Projects(){
    return(
        <div className='resources'>
            <Head>
                <title>
                Projects
                </title>
            </Head>
            <div className='res__heading'>
                Resources
            </div>
            <div className='res__para'>
                <span className='paradome'>
                    Check out these real cool websites to know more!
                </span>
                <div className='para__sob'>
                  <a href='https://github.com/features/copilot/' target='blank'>{'1)'} Github Copilot</a> 
                  <a href='https://www.cs.ubc.ca/cs-research/lci/research-groups/human-ai-interaction/' target='blank'>{'2)'} Human-AI Research Docs</a> 
                  <a href='https://sitn.hms.harvard.edu/flash/2020/racial-discrimination-in-face-recognition-technology/' target='blank'>{'3)'} Racial Discrimination in Face Recognition Systems</a> 
                  <a href='https://www.investopedia.com/articles/investing/090215/unintended-consequences-selfdriving-cars.asp' target='blank'>{'4)'} Why Self-Driving Cars Are Driving The World Crazy</a> 
                  <a href='https://www.pewresearch.org/internet/2018/12/10/artificial-intelligence-and-the-future-of-humans/' target='blank'>{'5)'} Why Human Involvement is Necessary in AI</a> 
                  <a href='https://www.sri.com/case-study/the-man-the-myth-the-legend-meet-shakey-the-robot-the-worlds-first-ai-based-robot/#:~:text=Named%20lovingly%20for%20its%20trembly,step%2Dby%2Dstep%20instructions.' target='blank'>{'6)'} Shakey? Who is it?</a> 
                </div>
            </div>
            <div className='res__heading'>
                Projects
            </div>
            <div className='res__para'>
            <span className='paradome'>
                    Build these beginner projects using Google Colab!
            </span>
            <div className='para__sob'>
                  <a href='https://realpython.com/sentiment-analysis-python/' target='blank'>{'1)'} Movie Review Sentiment</a> 
                  <a href='https://deepai.org/machine-learning-model/text-generator' target='blank'>{'2)'} Text Generation</a> 
                  <a href='https://www.expert.ai/blog/sentiment-analysis-how-artificial-intelligence-captures-voice-of-customer/' target='blank'>{'3)'} Sentiments Analysis</a> 
                  <a href='https://www.itm-conferences.org/articles/itmconf/pdf/2021/05/itmconf_icacc2021_03034.pdf' target='blank'>{'4)'} Next Word Predictor (Based on n-gram model covered by Dr Durret)</a> 
                  <a href='https://towardsdatascience.com/generating-music-using-deep-learning-cb5843a9d55e' target='blank'>{'5)'} Music Genre Classification</a> 
            </div>
            </div>
        </div>
    )
}

export default Projects;