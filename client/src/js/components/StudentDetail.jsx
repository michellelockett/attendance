//shows detailed absence data for students
import React from 'react';
import Api from '../../helpers/attendance';

class StudentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getStudentAbsences();
  }

  getStudentAbsences() {
    let studentId = this.props.student.id;
    Api.get(`/absences/student/${studentId}`)
      .then((absences) => {
        this.setState({ absences });
      });
  }

  render() {
    return (
      <div className="ui container">
        <h1 className="ui header">
        Student Detail Component
        </h1>
      </div>
    )
  }
}

export default StudentDetail