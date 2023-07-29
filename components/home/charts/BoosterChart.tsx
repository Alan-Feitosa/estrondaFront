import * as React from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";

export default function BoosterChart(){
    const data = [
        {
          name: 'Partida 1',
          mmr: 4000,
          pv: 2400,
          Vitoria: "Sim",
        },
        {
          name: 'Partida 2',
          mmr: 3000,
          pv: 1398,
          Vitoria: "Sim",
        },
        {
          name: 'Partida 3',
          mmr: 2000,
          pv: 9800,
          Vitoria: "Sim",
        },
        {
          name: 'Partida 4',
          mmr: 2780,
          pv: 3908,
          Vitoria: "Sim",
        },
        {
          name: 'Partida 5',
          mmr: 1890,
          pv: 4800,
          Vitoria: "Sim",
        }
    ];
    return(
        <div className="p-10"> 
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Desempenho</div>
                    <LineChart
                        width={400}
                        height={400}
                        data={data}
                        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                    >
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
                        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
                    </LineChart>
                </div>
            </div>
        </div>
    )
}


