namespace Application.Entities
{
    public class Statement : BaseEntity
    {
        public double Salary { get; set; }
        public double Other { get; set; }
        public double Mortgage { get; set; }
        public double Rent { get; set; }
        public double Utilities { get; set; }
        public double Travel { get; set; }
        public double Loans { get; set; }
        public double Cards { get; set; }

        public int UserId { get; set; } 
    }
}