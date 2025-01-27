import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";


const isAndroid = Platform.OS === 'android';
const statusBarHeight = `${StatusBar.currentHeight}px`

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? statusBarHeight : 0};
  flex: 1;
  background: #fafafa;
`;

export const CenteredContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  height: 50px;
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
`;
