import "./styles/App.css";
import {
    Card,
    CardContent,
    FormControl,
    MenuItem,
    Select,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import InfoBox from "./components/InfoBox";
import Map from "./components/Map";

function App() {
    const [countries, setCountries] = useState(["USA", "Indonesia"]);
    const [country, setCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});

    useEffect(() => {
        const getCountriesData = async () => {
            await fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => ({
                        name: country.country,
                        value: country.countryInfo.iso2,
                    }));
                    setCountries(countries);
                });
        };

        const getWorldwideData = async () => {
            await fetch("https://disease.sh/v3/covid-19/all")
                .then((response) => response.json())
                .then((data) => {
                    setCountryInfo(data);
                });
        };
        getCountriesData();
        getWorldwideData();
    }, []);

    const handleCountryChange = async (event) => {
        const countryCode = event.target.value;
        setCountry(countryCode);
        const url =
            countryCode === "worldwide"
                ? "https://disease.sh/v3/covid-19/all"
                : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCountryInfo(data);
            });
    };

    return (
        <div className="app">
            <div className="app__left">
                <div className="app__header">
                    <h1>Covid 19 Tracker</h1>
                    <FormControl>
                        <Select
                            variant="outlined"
                            onChange={handleCountryChange}
                            value={country}
                        >
                            <MenuItem value="worldwide">Worldwide</MenuItem>
                            {countries.map((country) => (
                                <MenuItem value={country.value}>
                                    {country.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="app__stats">
                    <InfoBox
                        title="Today's New Cases"
                        totalCase={countryInfo.cases}
                        dailyCase={countryInfo.todayCases}
                    />
                    <InfoBox
                        title="Recovered"
                        totalCase={123}
                        dailyCase={123}
                    />
                    <InfoBox title="Deaths" totalCase={123} dailyCase={123} />
                </div>
                <Map />
            </div>

            <Card className="app__right">
                <CardContent>
                    <h3>Live Cases by Country</h3>
                    {/* Table */}
                    <h3>Worldwide New Cases</h3>
                    {/* Graph */}
                </CardContent>
            </Card>
        </div>
    );
}

export default App;
