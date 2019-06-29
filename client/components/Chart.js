import React from 'react';
import rechars from 'recharts';
import {PieChart, Pie, Sector, Cell,} from 'recharts';



const Chart = (props) => {
  const data = [
    { name: 'food', value: 0 },
    { name: 'activities', value: 0 },
    { name: 'bills', value: 0 },
    { name: 'vacation', value: 0 },
  ];

  for (let key in props.allExpenses){
    let totalCost = 0;
    for (let i = 0; i < props.allExpenses[key].length; i++){
      totalCost += props.allExpenses[key][i][1];
    }
    for (let j = 0; j < data.length; j++){
      if (data[j].name === key){
        data[j].value = totalCost;
      }
    }
  }

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  }) => {
     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
    <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    </div>
    )
}
 
export default Chart;