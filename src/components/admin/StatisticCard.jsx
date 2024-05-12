import React from 'react'

const StatisticCard = ({ title, icon, statistic }) => {
    return (
        <div className="flex flex-col border border-gray-500 rounded-lg p-8 gap-2">
            <div className="flex flex-row justify-between items-center text-white">
                <span className='font-semibold text-sm'>{title}</span>
                <img src={icon} />
            </div>
            <span className='text-2xl font-bold text-white'>{statistic}</span>
        </div>
    )
}

export default StatisticCard