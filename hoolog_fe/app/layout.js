import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { theme } from '@/theme/themeConfig';
import { ConfigProvider } from 'antd';
import './globals.css';

const inter = Inter({ subsets: [ 'latin' ] });

export const metadata = {
  title: 'Hoolog',
  description: 'The blog web application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <StyledComponentsRegistry>
          <ConfigProvider
            theme={ theme }
          >
            { children }
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
