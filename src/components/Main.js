import React, {useState, useEffect} from 'react'
import Navbar from './Layout/Navbar';
import TopCard from './Layout/TopCard';
import { Grid } from '@material-ui/core';
import ItemTimeline from './Layout/ItemTimeline';
import DelTable from './Layout/DelTable';

const Main = ({data,del,int,ood,dex,nfi}) => {
    const [selected, setSelected] = useState("DEL");
    const [selectedData, setSelectedData] = useState(del);
    const [scanData, setScanData] = useState(del[0]['scan']);

    useEffect(() => {
        setSelectedData(del);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setClickedTimeline = (scan) => {
        setScanData(scan);
    }

    const setClickedCard = (name) => {
        setSelected(name);
        switch(name) {
            case "DEL":
                setSelectedData(del);
                break;
            case "INT":
                setSelectedData(int);
                break;
            case "OOD":
                setSelectedData(ood);
                break;
            case "DEX":
                setSelectedData(dex);
                break;
            case "NFI":
                setSelectedData(nfi);
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <Grid container direction="column" spacing={6}>
                <Grid item xs={12}>
                    <Navbar />
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <TopCard selected={selected} name={'DEL'} count={del.length} setClickedCard={setClickedCard} />
                        </Grid>
                        <Grid item>
                            <TopCard selected={selected} name={'INT'} count={int.length} setClickedCard={setClickedCard} />
                        </Grid>
                        <Grid item>
                            <TopCard selected={selected} name={'OOD'} count={ood.length} setClickedCard={setClickedCard} />
                        </Grid>
                        <Grid item>
                            <TopCard selected={selected} name={'DEX'} count={dex.length} setClickedCard={setClickedCard} />
                        </Grid>
                        <Grid item>
                            <TopCard selected={selected} name={'NFI'} count={nfi.length} setClickedCard={setClickedCard} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <ItemTimeline scanData={scanData} />
                        </Grid>
                        <Grid item xs={8}>
                            <DelTable selectedData={selectedData} setClickedTimeline={setClickedTimeline} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Main
