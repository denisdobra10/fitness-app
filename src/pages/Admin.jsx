import React, { useEffect, useState } from 'react'
import DollarSvg from '../assets/dollar.svg';
import SubscriptionsSvg from '../assets/subscriptions.svg';
import SalesSvg from '../assets/sales.svg';
import StatisticCard from '../components/admin/StatisticCard';
import PurchaseSummaryCard from '../components/admin/PurchaseSummaryCard';
import dummyDataList from '../dummy-data.json';
import ReactLoading from 'react-loading';
import axios from 'axios';


const AdminPage = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [statistics, setStatistics] = useState(null);
    const [statisticsLoading, setStatisticsLoading] = useState(true);


    useEffect(() => {

        const fetchStatistics = async () => {

            try {
                const response = await axios.get(`http://localhost/iulia-fitness/api/get_statistics.php`);

                if (response.data.error) {
                    console.log('Error in response, retrying...');
                    setTimeout(fetchStatistics, 1000);
                } else {
                    setStatistics(response.data);
                    setStatisticsLoading(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setStatisticsLoading(false);
            }
        };

        const fetchData = async () => {

            try {
                const response = await axios.get(`http://localhost/iulia-fitness/api/get_checkouts.php`);

                if (response.data.error) {
                    console.log('Error in response, retrying...');
                    setTimeout(fetchData, 1000);
                } else {
                    setData(response.data);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
        fetchStatistics();
    }, [])


    return (
        <div className='flex flex-col w-full p-8 xl:px-32 sm:py-16'>

            <div className="flex flex-col border border-gray-500 rounded-lg w-full p-8 gap-8">
                <h1 className='text-3xl text-paragraph font-extrabold'>Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {statisticsLoading ? (
                        <ReactLoading type='spinningBubbles' color='gold' height={'50px'} width={'50px'} />
                    ) : (
                        <>
                            <StatisticCard title={'Venit Luna'} icon={DollarSvg} statistic={`${statistics.month_revenue.toFixed(2)} lei`} />
                            <StatisticCard title={'Venit Saptamana'} icon={DollarSvg} statistic={`${statistics.week_revenue.toFixed(2)} lei`} />
                            <StatisticCard title={'Venit Ieri'} icon={DollarSvg} statistic={`${statistics.yesterday_revenue.toFixed(2)} lei`} />
                            <StatisticCard title={'Venit Azi'} icon={DollarSvg} statistic={`${statistics.today_revenue.toFixed(2)} lei`} />
                        </>
                    )}
                </div>

                <div className="flex flex-col gap-2 border border-gray-500 rounded-lg p-2 sm:p-8">
                    <span className='text-lg font-bold text-white'>Vanzari Recente</span>
                    <span className='text-gray-400 text-sm'>Se afiseaza ultimele 15 vanzari disponibile...</span>

                    <div className="flex flex-col gap-4 my-8">

                        {loading
                            ? <ReactLoading type='spinningBubbles' color='gold' height={'50px'} width={'50px'} />
                            : data.map((data) => (
                                <PurchaseSummaryCard
                                    key={data.id}
                                    id={data.id}
                                    gender={data.gender}
                                    name={data.name}
                                    email={data.email}
                                    phone={data.phone}
                                    purchase_date={data.purchase_date}
                                    purchase_type={data.purchase_type}
                                    revenue={data.revenue}
                                />
                            ))
                        }


                    </div>

                </div>
            </div>

        </div>
    )
}

export default AdminPage