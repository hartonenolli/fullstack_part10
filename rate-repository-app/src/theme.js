const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textWhite: '#ffffff',
    primary: '#0366d6',
    appBarBackground: '#24292e',
    aplicationBackground: '#e1e4e8',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: 'System',
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  textField: {
    backgroundColor: '#ffffff',
    borderColor: '#000000',
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
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
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