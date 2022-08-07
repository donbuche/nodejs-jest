const nodeInfo = require('../js/script');

// Extending Jest to evalute a range of values
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

// Do our basic test (It has not much sense, but is OK for testing)
test('Verifying the range of the uptime value', () => {
  expect(nodeInfo()).toBeWithinRange(1, 10000000);
});