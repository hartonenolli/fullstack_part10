const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textWhite: '#ffffff',
    primary: '#0366d6',
    appBarBackground: '#24292e',
    aplicationBackground: '#e1e4e8',
    black: '#000000',
    textError: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: 'System',
    mainIOS: 'Arial',
    mainAndroid: 'Roboto',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  textField: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0366d6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  singleRepositoryButton: {
    backgroundColor: '#0366d6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
  },
};

theme.repositoryList = {
  container: {
    flex: 1,
    backgroundColor: theme.colors.textWhite,
  },
  contentContainer: {
    padding: 10,
  },
  separator: {
    height: 10,
    backgroundColor: theme.colors.aplicationBackground,
  },
};

theme.repositoryItem = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    paddingBottom: 20,
    backgroundColor: theme.colors.textWhite,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  contentContainer: {
    flex: 1,
    flexShrink: 1,
  },
  description: {
    paddingVertical: 5,
  },
  languageTag: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  statItem: {
    alignItems: 'center',
    minWidth: 60,
  },
};

export default theme;