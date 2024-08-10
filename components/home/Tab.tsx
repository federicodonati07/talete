import React from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import SignUpPage from '@/components/home/SignUp'

const Tab = () => {
  return (
    <>
        <Tabs defaultValue='singup' className='w-full'>
            <TabsList className='grid grid-cols-2'>
                <TabsTrigger value="singup">Sing-Up</TabsTrigger>
                <TabsTrigger value="singin">Sing-In</TabsTrigger>
            </TabsList>
            <TabsContent value="singup">
                <SignUpPage></SignUpPage>
            </TabsContent>
            <TabsContent value="singin">
                
            </TabsContent>
        </Tabs>
    </>
  )
}

export default Tab