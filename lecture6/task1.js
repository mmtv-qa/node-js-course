


function multiplyMatrix (firstMatrix, secondMatrix) {
        let result = [];
        for (let i = 0; i < firstMatrix.length; i++) {
            result[i] = [];
            for (let j = 0; j < secondMatrix[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < firstMatrix[0].length; k++) {
                    sum += firstMatrix[i][k] * secondMatrix[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
}


module.exports = multiplyMatrix;