import { Card, CardContent, Typography } from "@material-ui/core";

const InfoBox = ({ title, dailyCase, totalCase }) => {
    return (
        <Card className="infoBox">
            <CardContent>
                <Typography color="textSecondary" className="infoBox__title">
                    {title}
                </Typography>

                <Typography
                    variant="h2"
                    color="textSecondary"
                    className="infoBox__dailyCase"
                >
                    {dailyCase}
                </Typography>

                <Typography
                    color="textSecondary"
                    className="infoBox__totalCase"
                >
                    Total {totalCase}{" "}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default InfoBox;
