const cohort = {
    name: 'March 2023',
    id: 1234,
    student_names: [`Jamie`, `James`, `Frazer`, `Jed`]
};

const cohortDetails = (details) => {
    return `${details.id} - ${details.name} - ${details.student_names.length} students in this cohort`
};