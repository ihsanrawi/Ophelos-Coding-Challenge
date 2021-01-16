namespace Application.Entities
{
    public class Rating : BaseEntity
    {
        public double DisposableIncome { get; set; }
        public string IeRating { get; set; }
        public double IeRatio { get; set; }
        public int UserId { get; set; }
    }
}