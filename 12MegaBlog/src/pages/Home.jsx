import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [subjects, setSubjects] = useState([])

    useEffect(() => {
        appwriteService.GetSubjects().then((subjects) => {
            console.log("Fetched subjects:", subjects.documents);
            if (subjects) {
                setSubjects(subjects || []);
            }
        })
    }, [])
  
    console.log("Home :: subjects", subjects);
    if (subjects.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {subjects.map((subject) => (
                        <div key={subject.$id} className='p-2 w-1/4'>
                            <PostCard title={subject.Subject} LastTestResult={subject.LastTestResult} createdAt={subject.$createdAt} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home