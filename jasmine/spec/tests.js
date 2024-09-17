
// Describe block for the test suite
describe('addNumbersAsync function', () => {
    it('should add two numbers and resolve with the result', async () => {
        // Arrange
        const a = 5;
        const b = 3;

        // Act
        const result = await addNumbers(a, b);

        // Assert
        expect(result).toEqual(8); // Check if the result matches the expected sum
    });

    it('should reject with an error message for invalid inputs', async () => {
        // Arrange
        const a = 'foo';
        const b = 3;

        try {
            // Act
            await addNumbers(a, b);

            // If the Promise resolves, fail the test
            fail('Expected the promise to reject');
        } catch (error) {
            // Assert
            expect(error).toEqual('Invalid inputs must be numbers'); // Check if the error message matches the expected error
        }
    });

    it('should reject with an error message for one invalid input', async () => {
        // Arrange
        const a = 5;
        const b = 'bar';

        try {
            // Act
            await addNumbers(a, b);

            // If the Promise resolves, fail the test
            fail('Expected the promise to reject');
        } catch (error) {
            // Assert
            expect(error).toEqual('Invalid inputs must be numbers'); // Check if the error message matches the expected error
        }
    });
});

