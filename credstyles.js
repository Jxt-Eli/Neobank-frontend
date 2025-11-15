import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -250, 
    position: 'relative'
  },
  input: {
    fontSize: 16, 
    backgroundColor: '#FFFFFF',
    minWidth: '90%', 
    minHeight: 55, 
    marginBottom: 15,
    borderRadius: 10, 
    paddingHorizontal: 15, 
  },
  title: {
    fontSize: 24, 
    color: 'black', 
    fontWeight: 'bold',
    marginBottom: 30, 
    position: 'absolute', 
    top: 150, 
  }, 
  status: {
    marginTop: 20, 
    fontsize: 16, 
    color: 'black',  
  }
});
export default styles