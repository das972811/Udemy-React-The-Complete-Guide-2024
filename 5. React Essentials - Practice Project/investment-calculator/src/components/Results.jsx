import PropTypes from 'prop-types';

import { calculateInvestmentResults, formatter } from '../util/investment';

Results.propTypes = {
    userInput: PropTypes.object
};

export default function Results({ userInput }) {
    const resultedData = calculateInvestmentResults(userInput);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultedData.map((yearData) => {
                    const initialInvestment =
                        resultedData[0].valueEndOfYear -
                        resultedData[0].interest -
                        resultedData[0].annualInvestment;
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}