namespace MyNotes.Contracts;

public record class GetNoteRequest(string? Search, string? SortItem, string? SortOrder);