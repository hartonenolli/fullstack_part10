import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInContainer } from '../../components/SignIn';

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmitMock = jest.fn();
      await render(<SignInContainer onSubmit={onSubmitMock} />);

      const usernameInput = screen.getByPlaceholderText('Username');
      const passwordInput = screen.getByPlaceholderText('Password');
      const submitButton = screen.getByText('Sign In');

      await fireEvent.changeText(usernameInput, 'testuser');
      await fireEvent.changeText(passwordInput, 'testpassword');
      await fireEvent.press(submitButton);

      await waitFor(() => {
        expect(onSubmitMock).toHaveBeenCalledTimes(1);
        expect(onSubmitMock.mock.calls[0][0]).toEqual({
          username: 'testuser',
          password: 'testpassword',
        });
      });
    });
  });
});