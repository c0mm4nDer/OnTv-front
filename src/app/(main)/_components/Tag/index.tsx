import { OntenCard } from '@/app/_components/cards/onten-card'
import { SliderTitle } from '@/app/_components/slider-title'
import { Slider } from '@/app/_components/slider/slider'
import React from 'react'

function Tag({data}:any) {
  return (
    <div className="container px-3 md:px-0 overflow-auto pt-2 mb-6">
    <SliderTitle title={data?.title} link={`/all-program/all/tag/${data?.tags?.[0]?.tag?.name}`} />
    <div className="h-[350px]">
      <Slider
        Component={OntenCard}
        data={data?.tags?.[0]?.programs}
        displayCount={8}
        isShowIcon={false}
      />
    </div>
  </div>
  )
}

export default Tag