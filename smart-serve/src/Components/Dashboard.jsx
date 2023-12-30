import React from 'react';
import styles from './Dashboard.module.css';
import VerticalBarChart from './Chart';
import { NavLink } from 'react-router-dom';



const Dashboard = () => {
  const data = [
    {
      title: 'Total Revenue',
      value: '$406,411.29',
    },
    {
      title: 'Tokal Jobs Avg',
      value: '$620',
    },
    {
      title: 'Tickets Created',
      value: '655',
    },
    {
      title: 'Tickets Scheduled',
      value: '735',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Company Metrics</h1>
      <div className={styles.cardsWrapper}>
        {data.map((item) => (
          <Card key={item.title} title={item.title} value={item.value} />
        ))}
      </div>
      <div className={styles.navLinks}>
        <NavLink  to={'/UserData'} className={styles.nav}>UserData</NavLink>
        <NavLink  to={'/sortedData'} className={styles.nav}>Sorted Data</NavLink>
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
    <>
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardValue}>{value}</p>
        </div>
    </>
);

export default Dashboard;
