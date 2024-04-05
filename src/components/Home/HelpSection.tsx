
import { useState } from 'react'
import data from '../../data/helpsection.json'
import personalhelp from '../../data/personalhelp.json'
import businesshelp from '../../data/businesshelp.json'
import technicalhelp from '../../data/technicalhelp.json'

import Button from '../common/Button';



function HelpSection() {

  const [helpTab, setHelpTab] = useState('personal-help');
  const [helpTabSections, setHelpTabSections] = useState(personalhelp);
  const [helpTabSubtitle, setHelpTabSubtitle] = useState(personalhelp[0].subtitle);
  const [helpTabQuestions, setHelpTabQuestions] = useState(personalhelp[0].questions);


  const handleTabChange = (tab: string) => {
    setHelpTab(tab);
    switch (tab) {
      case 'business-help':
        setHelpTabSections(businesshelp);
        setHelpTabSubtitle(businesshelp[0].subtitle);
        setHelpTabQuestions(businesshelp[0].questions);
        break;
      case 'technical-help':
        setHelpTabSections(technicalhelp);
        setHelpTabSubtitle(technicalhelp[0].subtitle);
        setHelpTabQuestions(technicalhelp[0].questions);
        break;
      default:
        setHelpTabSections(personalhelp);
        setHelpTabSubtitle(personalhelp[0].subtitle);
        setHelpTabQuestions(personalhelp[0].questions);
        break;
    }
    

  }

  const changeQuestions = (subtitle:string,questions:{ id: string; question: string; url: string; }[]) => {
    setHelpTabQuestions(questions);
    setHelpTabSubtitle(subtitle);
  }

  

  return (
    <div className="sm:w-9/12 max-w-screen-xl mx-auto mt-10">

      {/* Help type selector */}
      <div className='bg-gray-200 flex sm:flex-row flex-col w-fit sm:rounded-full rounded-3xl p-1 mx-auto'>
        {
          data.map(({id, title}) => (
            <Button
              key={id}
              text={title}
              className={`border-none ${helpTab === id ? 'bg-white text-accent-1' : 'text-gray-700 font-normal'}`}
              onClick={() => handleTabChange(id)}
            />
          ))
        }
      </div>

      <div className='grid md:grid-cols-12 gap-10 m-5'>
        {/* Help section-questions type */}
        <div className='md:col-span-3 flex flex-col justify-start items-start'>
          {
            helpTabSections.map(({subtitle,questions},index) => (
              <button 
                key={index} 
                className={`text-xl font-medium w-full text-left border-l-2 px-5 py-3
                ${helpTabSubtitle === subtitle ? 'text-accent-1 bg-accent-3 border-accent-1 font-bold' : 'text-gray-700 border-white'}`}
                onClick={() => changeQuestions(subtitle,questions)}
              >
                {subtitle}
              </button>
            ))
          }
        </div>

        {/* help questions display */}
        <div className='md:col-span-6 flex flex-col gap-y-5'>
          <h4 className='text-3xl font-medium'>{helpTabSubtitle}</h4>
          {
            helpTabQuestions.map(({question},index) => (
              <div key={index} className="">
                <a href='#' className="text-2xl leading-7 font-semibold text-accent-2 hover:text-accent-4 cursor-pointer">{question}</a>
              </div>
            ))
          }
        </div>

        {/* CTA */}
        <div className='md:col-span-3 bg-accent-5 rounded-lg px-4 flex flex-col items-center gap-6 md:pt-10 md:pb-24 pt-5 pb-10 h-fit shadow'>
          <p className='font-semibold text-center text-base font-serif'>Get Customized help with your account and access your message center</p>
          <Button text='log in' secondary className='py-1 px-4 text-sm font-bold'/>
        </div>
      </div>
      



    </div>
  )
}

export default HelpSection