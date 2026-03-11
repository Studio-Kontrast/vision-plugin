Write tests for: $ARGUMENTS

Follow these conventions:
- Use Jest with TypeScript
- Use `describe` / `it` blocks (not `test()`)
- Group by behaviour, not by method name
- Mock external services (database, APIs) - never hit real endpoints
- Include edge cases: empty input, null, boundary values, error paths
- Use descriptive test names: `it('returns 404 when user does not exist')`

Structure:
```
describe('ComponentOrFunction', () => {
  describe('when condition', () => {
    it('should expected behaviour', () => {
      // Arrange → Act → Assert
    });
  });
});
```

After writing the tests, run `npm test` to verify they pass.